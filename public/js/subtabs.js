document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-subtab]');
  if (!btn) return;

  e.preventDefault();
  const targetId = btn.getAttribute('data-subtab');
  
  // Find the parent section so Seeking and Education don't conflict
  const section = btn.closest('.tab-content') || document;

  // 1. Hide all subtab contents in this section
  section.querySelectorAll('.subtab-content').forEach(function (content) {
    content.classList.remove('active');
  });

  // 2. Remove 'active' class from all subtab buttons in this section
  section.querySelectorAll('[data-subtab]').forEach(function (b) {
    b.classList.remove('active');
  });

  // 3. Show the target content panel
  const targetContent = section.querySelector('#' + targetId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // 4. Mark the clicked button as active
  btn.classList.add('active');
});