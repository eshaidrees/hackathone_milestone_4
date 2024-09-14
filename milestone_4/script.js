// // Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission to display resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n     <h1> Editable Resume</h1>\n        <h3>Personal Information</h3>\n        <p>Name: <span contenteditable=\"true\">".concat(name, "</span> </p>\n        <p>Phone: <span contenteditable=\"true\">").concat(contact, "</span></p>\n        <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(workExperience, "</p>\n        \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
