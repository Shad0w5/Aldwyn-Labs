export default `<form id="project-form" class="project-form">
  <div class="form-row">
    <div class="field"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" maxlength="120" required></div>
    <div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div>
  </div>
  <div class="field"><label for="business">Business name <span>(optional)</span></label><input id="business" name="business" autocomplete="organization" maxlength="180"></div>
  <div class="field"><label for="website">Existing website <span>(optional)</span></label><input id="website" name="website" type="url" placeholder="https://yourwebsite.ie" autocomplete="url" maxlength="2048" aria-describedby="website-help"><p id="website-help" class="field-help">Useful for a redesign, website improvements or care. Include https:// or http://.</p></div>
  <div class="field"><label for="project-type">What are you thinking of?</label><select id="project-type" name="projectType" aria-describedby="service-choice-note">
    <option value="new">A new business website</option>
    <option value="redesign">A redesign of an existing website</option>
    <option value="landing">A landing page</option>
    <option value="improvements">Improvements to an existing website</option>
    <option value="care">Website care</option>
    <option value="guidance">I’d like some guidance</option>
  </select><p id="service-choice-note" class="field-help">Choose a starting point. The scope and costs are agreed separately.</p></div>
  <fieldset class="brief-extras" id="brief-extras"><legend>Optional website extras</legend><p class="field-help">Select anything you’d like to discuss. These are not automatically included.</p>
    <div class="brief-choices">
      <label class="brief-choice"><input type="checkbox" name="extras" value="pages"><span>Additional pages</span></label>
      <label class="brief-choice"><input type="checkbox" name="extras" value="showcase"><span>Project or product showcase</span></label>
      <label class="brief-choice"><input type="checkbox" name="extras" value="connection"><span>Existing booking or enquiry tool</span></label>
      <label class="brief-choice"><input type="checkbox" name="extras" value="migration"><span>Content move &amp; redirects</span></label>
    </div>
  </fieldset>
  <div class="field"><label for="message">Tell us a little about it</label><textarea id="message" name="message" rows="5" minlength="20" maxlength="4000" required aria-describedby="message-help"></textarea><p id="message-help" class="field-help">At least 20 characters. Please leave out passwords and sensitive customer information.</p></div>
  <noscript><p class="field-help">Please enable JavaScript to prepare a brief. This form cannot send your information.</p></noscript>
  <button class="button button-primary" type="submit" disabled>Prepare my brief</button>
  <p id="form-status" class="form-status" role="status" aria-live="polite"></p>
  <div id="brief-result" class="brief-result" hidden><label for="brief-text">Your prepared brief</label><textarea id="brief-text" readonly rows="12"></textarea><div class="result-actions"><button class="button button-primary" id="download-brief" type="button">Save brief as a file</button><button class="button button-outline" id="copy-brief" type="button">Copy brief</button></div></div>
</form>`;
