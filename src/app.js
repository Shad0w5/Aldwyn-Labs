document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(restoreFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 821px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = String(new Date().getFullYear());
const form = document.querySelector('#project-form');
if (form) {
const status = document.querySelector('#form-status');
const result = document.querySelector('#brief-result');
const briefText = document.querySelector('#brief-text');
const projectType = form.elements.projectType;
const extraFields = document.querySelector('#brief-extras');
const steps = Array.from(form.querySelectorAll('.brief-step'));
const progress = document.querySelector('#brief-progress');
const progressValue = document.querySelector('#brief-progress-value');
const stepStatus = document.querySelector('#brief-step-status');
const stepNames = ['Your website', 'Optional details', 'Review & save'];
let activeStep = 0;
function showStep(index, focus = true) {
  activeStep = index;
  steps.forEach((step, i) => { step.hidden = i !== index; });
  result.hidden = index !== 2;
  progressValue.value = index + 1;
  stepStatus.textContent = `Step ${index + 1} of 3 · ${stepNames[index]}`;
  progress.querySelectorAll('li').forEach((item, i) => {
    if (i === index) item.setAttribute('aria-current', 'step');
    else item.removeAttribute('aria-current');
  });
  if (focus) {
    document.querySelector(index === 0 ? '#brief-goal-title' : index === 1 ? '#brief-details-title' : '#brief-review-title').focus({preventScroll:true});
    progress.scrollIntoView({block:'start',behavior:'instant'});
  }
}
function checkFields(container) {
  form.elements.message.setCustomValidity(form.elements.message.value.trim().length < 20 ? 'Add at least 20 characters about your website.' : '');
  const invalid = Array.from(container.querySelectorAll('input,select,textarea')).find(field => !field.disabled && !field.checkValidity());
  if (!invalid) return true;
  const step = invalid.closest('.brief-step');
  if (step) showStep(Number(step.dataset.step), false);
  const details = invalid.closest('details');
  if (details) details.open = true;
  invalid.reportValidity(); invalid.focus();
  return false;
}

const extras = {
  pages: 'Additional pages',
  showcase: 'Project or product showcase',
  connection: 'Existing booking or enquiry tool',
  migration: 'Content move & redirects'
};
// Only known options can be carried over from the services and care pages.
const params = new URLSearchParams(location.search);
const requestedService = params.get('service');
if (['new', 'redesign', 'landing', 'improvements', 'care', 'guidance'].includes(requestedService)) projectType.value = requestedService;
for (const extra of params.getAll('extra')) {
  if (Object.hasOwn(extras, extra)) form.querySelector(`input[name="extras"][value="${extra}"]`).checked = true;
}
function updateServiceFields() {
  const care = projectType.value === 'care';
  extraFields.hidden = care;
  extraFields.disabled = care;
  document.querySelector('#service-choice-note').textContent = care
    ? 'Add the website address and any platform details on the following step.'
    : 'Choose the closest option. You can add the details below.';
  document.querySelector('label[for="message"]').textContent = care ? 'What needs updating or looking after?' : 'What would you like to build or change?';
  form.elements.message.placeholder = care ? 'For example: updating service information and photographs, with help maintaining the existing site.' : 'For example: a five-page site for our practice, with a service page, a gallery and appointment enquiries.';
}
updateServiceFields();
projectType.addEventListener('change', updateServiceFields);
form.elements.message.addEventListener('input', () => form.elements.message.setCustomValidity(''));
function setStatus(message, error = false) { status.textContent = message; status.classList.toggle('is-error', error); }
form.addEventListener('submit', event => {
  event.preventDefault();
  if (activeStep === 0) { if (checkFields(steps[0])) showStep(1); return; }
  if (!checkFields(form)) return;
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const email = String(data.get('email')).trim();
  const message = String(data.get('message')).trim();
  if (message.length < 20) {
    result.hidden = true;
    showStep(0, false);
    setStatus('Please add at least 20 characters about your project.', true);
    document.querySelector('#message').focus();
    return;
  }
  const selectedExtras = data.getAll('extras').filter(value => Object.hasOwn(extras, value)).map(value => extras[value]);
  briefText.value = ['ALDWYN LABS — PROJECT BRIEF', '', `Name: ${name || 'Not provided'}`, `Email: ${email || 'Not provided'}`, `Business: ${String(data.get('business')).trim() || 'Not provided'}`, `Existing website: ${String(data.get('website') || '').trim() || 'Not provided'}`, `Project: ${projectType.selectedOptions[0].textContent}`, ...(projectType.value === 'care' ? [] : [`Optional extras to discuss: ${selectedExtras.join(', ') || 'None selected'}`]), '', 'What I have in mind:', message, '', 'Scope and costs are subject to agreement.', 'Prepared locally. This brief has not been sent to Aldwyn Labs.'].join('\n');
  showStep(2);
  setStatus('Your brief is ready to review.');
});
form.addEventListener('input', event => {
  if (event.target !== briefText && !result.hidden) {
    showStep(0, false);
    briefText.value = '';
    setStatus('Your details changed. Prepare the brief again to include your updates.');
  }
});
document.querySelector('#download-brief').addEventListener('click', () => {
  if (!briefText.value) return;
  const url = URL.createObjectURL(new Blob([briefText.value], {type: 'text/plain;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url; link.download = 'Aldwyn-Project-Brief.txt';
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus('Your brief file has been prepared for download. Nothing has been sent.');
});
document.querySelector('#copy-brief').addEventListener('click', async () => {
  if (!briefText.value) return;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(briefText.value);
    setStatus('Brief copied. Nothing has been sent.');
  } catch {
    briefText.focus(); briefText.select();
    setStatus('Automatic copy is unavailable. The brief is selected so you can copy it manually.');
  }
});

document.querySelector('#brief-next').addEventListener('click', () => {
  if (checkFields(steps[0])) { setStatus(''); showStep(1); }
});
document.querySelector('#brief-back').addEventListener('click', () => { setStatus(''); showStep(0); });
document.querySelector('#brief-edit').addEventListener('click', () => { briefText.value = ''; setStatus(''); showStep(0); });
form.noValidate = true;
progress.hidden = false;
document.querySelector('#brief-next').hidden = false;
document.querySelector('#brief-back').hidden = false;
showStep(0, false);
form.querySelector('button[type="submit"]').disabled = false;
}

// Native anchors still work without JavaScript; enhance links to closed FAQ answers.
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}));
// Resolve FAQ deep links when arriving from another page.
function openLinkedDetails() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
openLinkedDetails();
window.addEventListener('hashchange', openLinkedDetails);


// Reveal process steps as they enter view; reduced-motion users see them immediately.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: .08 });
  document.querySelectorAll('.studio-process-list li,.home-capability-row').forEach(element => { element.classList.add('enter-view'); observer.observe(element); });
}
