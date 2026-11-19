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
const status = document.querySelector('#form-status');
const result = document.querySelector('#brief-result');
const briefText = document.querySelector('#brief-text');
function setStatus(message, error = false) { status.textContent = message; status.classList.toggle('is-error', error); }
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const email = String(data.get('email')).trim();
  const message = String(data.get('message')).trim();
  if (!name || message.length < 20) {
    result.hidden = true;
    setStatus('Please add your name and at least 20 characters about your project.', true);
    document.querySelector(!name ? '#name' : '#message').focus();
    return;
  }
  briefText.value = ['ALDWYN LABS — PROJECT BRIEF', '', `Name: ${name}`, `Email: ${email}`, `Business: ${String(data.get('business')).trim() || 'Not provided'}`, `Project: ${data.get('projectType')}`, '', 'What I have in mind:', message, '', 'Prepared locally. This brief has not been sent to Aldwyn Labs.'].join('\n');
  result.hidden = false;
  setStatus('Your brief is ready. Save or copy it below. Nothing has been sent.');
  briefText.focus();
});
form.addEventListener('input', event => {
  if (event.target !== briefText && !result.hidden) {
    result.hidden = true;
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

// Native anchors still work without JavaScript; enhance links to closed FAQ answers.
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}));
form.querySelector('button[type="submit"]').disabled = false;
