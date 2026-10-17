document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-tab]');
  if (!btn) return;

  e.preventDefault();
  const targetId = btn.getAttribute('data-tab');

  // 1. Hide all tab content panels
  document.querySelectorAll('.tab-content').forEach(function (content) {
    content.classList.remove('active');
    content.style.display = 'none';
  });

  // 2. Remove 'active' class from all tab buttons
  document.querySelectorAll('[data-tab]').forEach(function (b) {
    b.classList.remove('active');
  });

  // 3. Show the selected content panel
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add('active');
    targetContent.style.removeProperty('display');
  }

  // 4. Mark clicked button as active
  btn.classList.add('active');
});