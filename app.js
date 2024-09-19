//get references to the  form and diplay area
var form = document.getElementById('form-section');
var resumeSection = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var institute = document.getElementById('institute').value;
    var skills = document.getElementById('skills').value;
    var jobTitle = document.getElementById('experience').value;
    var companyName = document.getElementById('experience').value;
    var dates = document.getElementById('dates-0').value;
    var summary = document.getElementById('summary').value;
    //generate the resume content dynamically:
    var resumeHtmlContent = "\n      <h2><b>Dynamic and Editable Resume</b></h2>\n      <h3>Personal Information</h3>\n      <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n      <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n      <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n      <p><b>LinkedIn:</b><span contenteditable=\"true\"> ").concat(linkedin, "</span></p>\n      <h3>Education</h3>\n      <p contenteditable=\"true\"> ").concat(education, "</span></p>\n      <p><b>Institute:</b><span contenteditable=\"true\"> ").concat(institute, "</span></p>\n\n      <h3>Skills</h3>\n      <p contenteditable=\"true\"> ").concat(skills, "</span></p>\n\n      <h3>Experience</h3>\n      <p><b>Job Title:</b><span contenteditable=\"true\"> ").concat(jobTitle, "</span></p>\n      <p><b>Company Name:</b><span contenteditable=\"true\"> ").concat(companyName, "</span></p>\n      <p><b>Duration:</b><span contenteditable=\"true\"> ").concat(dates, "</span></p>\n      <h3>Professional Summary</h3>\n      <p contenteditable=\"true\"> ").concat(summary, "</span></p>\n      ");
    //display generated resume
    if (resumeSection) {
        resumeSection.innerHTML = resumeHtmlContent;
    }
    else {
        console.log('Resume section not found');
    }
});
