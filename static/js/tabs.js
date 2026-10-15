document.addEventListener("DOMContentLoaded", function() {
  const btnSeeking = document.getElementById('btn-seeking');
  const btnEducation = document.getElementById('btn-education');
  const seekingSec = document.getElementById('seeking');
  const educationSec = document.getElementById('education');

  if (!btnSeeking || !btnEducation) return;

  btnSeeking.addEventListener('click', function() {
    seekingSec.classList.add('active-block');
    seekingSec.classList.remove('active-flex');
    
    educationSec.classList.remove('active-flex', 'active-block');

    btnSeeking.classList.add('active');
    btnEducation.classList.remove('active');
  });

  btnEducation.addEventListener('click', function() {
    educationSec.classList.add('active-block');
    educationSec.classList.remove('active-flex');

    seekingSec.classList.remove('active-block', 'active-flex');

    btnEducation.classList.add('active');
    btnSeeking.classList.remove('active');
  });
});