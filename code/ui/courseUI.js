//
// courseUI.js
//--------------------
// Makes course select screen.
// by Qainguin
//
//

document.addEventListener('DOMContentLoaded', createCourseButtons);

function createCourseButtons() {
    const container = document.getElementById('courses');

    if (container) {
        // Loop to create 32 buttons
        for (let i = 0; i < 38; i++) {
            // Create a button element
            const button = document.createElement('button');

            button.setAttribute('onclick', `chooseCourse(${i})`);
            button.className = 'courseCard';
            button.style.backgroundImage = `url('resource/screenshots/${i}.png')`;
            container.appendChild(button);
            console.log("Creating course button...");
        }
    } else {
        console.error("Container not found!");
    }
}
