// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Add a click event listener to the 'Education' section
  var educationSection = document.querySelector('section:nth-of-type(2)');
  educationSection.addEventListener('click', function() {
    var educationList = document.querySelector('#education-list');
    educationList.classList.toggle('hide');
  });

  // Add a click event listener to the 'Experience' section
  var experienceSection = document.querySelector('section:nth-of-type(3)');
  experienceSection.addEventListener('click', function() {
    var experienceList = document.querySelector('#experience-list');
    experienceList.classList.toggle('hide');
  });

  // Add a click event listener to the 'Skills' section
  var skillsSection = document.querySelector('section:nth-of-type(4)');
  skillsSection.addEventListener('click', function() {
    var skillsList = document.querySelector('#skills-list');
    skillsList.classList.toggle('hide');
  });
});

