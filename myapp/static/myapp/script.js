document.addEventListener('DOMContentLoaded', function () {
    const course = new URLSearchParams(window.location.search).get('course');

    // Handle form submission
    document.getElementById('projectForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission
        document.getElementById('successMessage').style.display = 'block'; // Show success message
    });

    // Handle "+ Add Teammate" button
    document.getElementById('addTeammate').addEventListener('click', function () {
        const teammatesDiv = document.getElementById('teammates');
        const teammateCount = teammatesDiv.children.length + 1;

        if (teammateCount <= 5) {
            const newTeammateRow = document.createElement('div');
            newTeammateRow.className = 'teammate-row';
            newTeammateRow.innerHTML = `
                <input type="text" name="teammate${teammateCount}" placeholder="Teammate ${teammateCount} Name">
                <input type="text" name="roll${teammateCount}" placeholder="Teammate ${teammateCount} Roll Number">
                ${course === 'summer_internship' ? '<input type="text" name="internshipDomain' + teammateCount + '" placeholder="Internship Domain">' : ''}
            `;
            teammatesDiv.appendChild(newTeammateRow);
        } else {
            alert('Maximum of 5 teammates allowed.');
        }
    });
});