//get references to the  form and diplay area

    const form = document.getElementById('form-section') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-display') as HTMLDivElement;
  
    //handle form submission
    form.addEventListener('submit', (event : Event) => {
      event.preventDefault();   //prevent page reload

      //collect input values
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const contact = (document.getElementById('contact') as HTMLInputElement).value;
      const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const institute = (document.getElementById('institute') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
      const jobTitle = (document.getElementById('experience') as HTMLInputElement).value;
      const companyName = (document.getElementById('experience') as HTMLInputElement).value;
      const dates = (document.getElementById('dates-0') as HTMLInputElement).value;
      const summary = (document.getElementById('summary') as HTMLInputElement).value;


      //generate the resume content dynamically:
      const resumeHtmlContent = `
      <h2><b>Dynamic and Editable Resume</b></h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
      <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
      <p><b>Contact:</b><span contenteditable="true"> ${contact}</span></p>
      <p><b>LinkedIn:</b><span contenteditable="true"> ${linkedin}</span></p>
      <h3>Education</h3>
      <p contenteditable="true"> ${education}</span></p>
      <p><b>Institute:</b><span contenteditable="true"> ${institute}</span></p>

      <h3>Skills</h3>
      <p contenteditable="true"> ${skills}</span></p>

      <h3>Experience</h3>
      <p><b>Job Title:</b><span contenteditable="true"> ${jobTitle}</span></p>
      <p><b>Company Name:</b><span contenteditable="true"> ${companyName}</span></p>
      <p><b>Duration:</b><span contenteditable="true"> ${dates}</span></p>
      <h3>Professional Summary</h3>
      <p contenteditable="true"> ${summary}</span></p>
      `;

      //display generated resume
      if (resumeSection) {
        resumeSection.innerHTML = resumeHtmlContent;

        
      } else {
        console.log( 'Resume section not found');

        
        
      }

    })








  
      
  
      
  