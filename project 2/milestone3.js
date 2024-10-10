var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var conatctno = document.getElementById('contactno').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var workexperience = document.getElementById('workexperience').value;
        // GENERATE RESUME//
        var resume = "\n        <h2> GENERATE RESUME</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact NO:</strong> ").concat(conatctno, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Work Experience:</strong> ").concat(workexperience, "</p>\n\n        ");
        resumeOutput.innerHTML = resume;
    });
}
else {
    console.error('Form or Output div not found in the DOM');
}
