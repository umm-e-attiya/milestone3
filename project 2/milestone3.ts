const resumeForm = document.getElementById('resumeForm') as HTMLInputElement 
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement

if (resumeForm && resumeOutput) {

    resumeForm.addEventListener('submit',(event)=> {
        event.preventDefault(); 

        const name = (document.getElementById('name')as HTMLInputElement).value
        const email = (document.getElementById('email')as HTMLInputElement).value
        const conatctno = (document.getElementById('contactno')as HTMLInputElement).value
        const education = (document.getElementById('education')as HTMLInputElement).value
        const skills= (document.getElementById('skills')as HTMLInputElement).value
        const workexperience = (document.getElementById('workexperience')as HTMLInputElement).value
        
        

        // GENERATE RESUME//
        const resume = `
        <h2> GENERATE RESUME</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact NO:</strong> ${conatctno}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Work Experience:</strong> ${workexperience}</p>

        `;
        resumeOutput.innerHTML=resume
    });

} else {
    console.error('Form or Output div not found in the DOM');
}