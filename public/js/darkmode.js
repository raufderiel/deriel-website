function attachSettingsListener() {
  const toggleBtn = document.getElementById('settings-toggle-btn');
  const menu = document.getElementById('settings-menu');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const themeLabel = document.getElementById('theme-label');

  if (!toggleBtn || !menu || !darkModeToggle) return;

  // Minimalist SVG Icons
  const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  // Helper function to update theme SVG & text
  function updateThemeLabel(isDark) {
    if (themeLabel) {
      themeLabel.innerHTML = isDark 
        ? `${moonSVG} <span>Dark</span>` 
        : `${sunSVG} <span>Light</span>`;
    }
  }

  // Sync state with current theme on load
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    darkModeToggle.checked = true;
    updateThemeLabel(true);
  } else {
    updateThemeLabel(false);
  }

  // Toggle dropdown menu
  toggleBtn.onclick = function(e) {
    e.stopPropagation();
    const isHidden = (menu.style.display === 'none' || menu.style.display === '');
    menu.style.display = isHidden ? 'block' : 'none';
    toggleBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
  };

  // Close menu when clicking outside
  document.onclick = function(e) {
    if (menu && !menu.contains(e.target) && e.target !== toggleBtn) {
      menu.style.display = 'none';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  };

  // Switch dark/light theme
  darkModeToggle.onchange = function() {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      updateThemeLabel(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      updateThemeLabel(false);
    }
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachSettingsListener);
} else {
  attachSettingsListener();
}