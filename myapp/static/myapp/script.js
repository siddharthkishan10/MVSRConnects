document.addEventListener('DOMContentLoaded', function () {
    const course = new URLSearchParams(window.location.search).get('course');
    
    // Handle form submission
    document.getElementById('projectForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission
        document.getElementById('successMessage').style.display = 'block'; // Show success message
    });
    
    // Disable existing click handlers by cloning and replacing the element
    const addTeammateButton = document.getElementById('addTeammate');
    const newButton = addTeammateButton.cloneNode(true);
    addTeammateButton.parentNode.replaceChild(newButton, addTeammateButton);
    
    // Add a single click handler to the new button
    newButton.addEventListener('click', function () {
        console.log('Add teammate clicked - should appear only once per click');
        
        const teammatesDiv = document.getElementById('teammates');
        const teammateCount = teammatesDiv.children.length + 1; // Calculate the next teammate number
        
        if (teammateCount <= 5) {
            const newTeammateRow = document.createElement('div');
            newTeammateRow.className = 'flex gap-2 mb-2'; // Tailwind classes for layout
            newTeammateRow.innerHTML = `
                <input type="text" name="teammate${teammateCount}" placeholder="Teammate ${teammateCount} Name" class="p-2 border rounded w-full">
                <input type="text" name="roll${teammateCount}" placeholder="Teammate ${teammateCount} Roll Number" class="p-2 border rounded w-full">
                ${course === 'summer_internship' ? '<input type="text" name="internshipDomain' + teammateCount + '" placeholder="Internship Domain" class="p-2 border rounded w-full">' : ''}
                <button type="button" onclick="removeTeammate(this)" class="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
            `;
            teammatesDiv.appendChild(newTeammateRow);
        } else {
            alert('Maximum of 5 teammates allowed.');
        }
    });
    
    // Function to remove a teammate and renumber the remaining teammates
    window.removeTeammate = function (button) {
        const teammateRow = button.parentElement;
        teammateRow.remove(); // Remove the teammate row
        
        // Renumber the remaining teammates
        const teammatesDiv = document.getElementById('teammates');
        const teammateRows = teammatesDiv.children;
        for (let i = 0; i < teammateRows.length; i++) {
            const teammateNumber = i + 1;
            const inputs = teammateRows[i].querySelectorAll('input');
            // Update placeholders and names for teammate name and roll number
            inputs[0].setAttribute('placeholder', `Teammate ${teammateNumber} Name`);
            inputs[0].setAttribute('name', `teammate${teammateNumber}`);
            inputs[1].setAttribute('placeholder', `Teammate ${teammateNumber} Roll Number`);
            inputs[1].setAttribute('name', `roll${teammateNumber}`);
            // Update placeholder and name for internship domain (if applicable)
            if (inputs[2]) {
                inputs[2].setAttribute('placeholder', 'Internship Domain');
                inputs[2].setAttribute('name', `internshipDomain${teammateNumber}`);
            }
        }
    };
});