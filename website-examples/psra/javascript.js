/* Corrected variable assignment */
var aboutTab = document.getElementById("about");
var minutesTab = document.getElementById("minutes");
var agendasTab = document.getElementById("agendas");
var eventsTab = document.getElementById("events");
var membersTab = document.getElementById("members");
var contactTab = document.getElementById("contact"); // Corrected typo

/* Function for changing visibility of sections */
function showSelection(sectionId) {
    const sections = document.querySelectorAll('.contentSelection');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

/* Adding event listeners */
aboutTab.addEventListener('click', function() { showSelection('about'); });
minutesTab.addEventListener('click', function() { showSelection('minutes'); });
agendasTab.addEventListener('click', function() { showSelection('agendas'); });
eventsTab.addEventListener('click', function() { showSelection('events'); });
membersTab.addEventListener('click', function() { showSelection('members'); });
contactTab.addEventListener('click', function() { showSelection('contact'); });

