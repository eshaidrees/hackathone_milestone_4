// // Get reference to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission to display resume
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
     <h1> Editable Resume</h1>
        <h3>Personal Information</h3>
        <p>Name: <span contenteditable="true">${name}</span> </p>
        <p>Phone: <span contenteditable="true">${contact}</span></p>
        <p>Email: <span contenteditable="true">${email}</span></p>
        
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        
        <h3>Experience</h3>
        <p contenteditable="true">${workExperience}</p>
        
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        `;

        // Display the generated resume
        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        }else{
            console.error('The resume display element is missing')
        }

})