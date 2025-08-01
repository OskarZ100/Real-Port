//big background n stuff
const bodyElement = document.body;
const htmlElement = document.getElementById("htmlBIG");
const root = document.documentElement;

//setting up my buttons in JS FORM!!!!!
const buttonProjects = document.getElementById("button-proj");
const buttonAboutme = document.getElementById("button-abt");
const buttonContact = document.getElementById("button-cont");
const buttonLinks = document.getElementById("button-link");

//getting other things from the document 
let title = document.getElementById("title-div");
let content = document.getElementById("content-container");
let lilimage = document.getElementById("image-n-stuff");

const theBox = document.getElementById("graphic-holder");


//some vars i need to use 
let currentContent = [title,content,lilimage];

//hover over buttons event listener :o

//hover event for the project button
buttonProjects.addEventListener("mouseover", (event) => { 

});

buttonProjects.addEventListener("mouseout", (event) => {
   
});

//hover event for the about me button
buttonAboutme.addEventListener("mouseover", (event) => { 
   
});

buttonAboutme.addEventListener("mouseout", (event) => {

});

//hover effect for the contact button
buttonContact.addEventListener("mouseover", (event) => { 
 

});

buttonContact.addEventListener("mouseout", (event) => {

});

//hover effect for the links button
buttonLinks.addEventListener("mouseover", (event) => { 

});

buttonLinks.addEventListener("mouseout", (event) => {
    
});

//on click event listeners 
buttonProjects.addEventListener("click", (event) =>{
    htmlElement.classList.remove(htmlElement.classList[0]);
    htmlElement.classList.add('project-click');
    for(let i = 0; i < currentContent.length; i++){
        currentContent[i].remove();
    }
    projectItems();
});

buttonAboutme.addEventListener("click", (event) =>{
    htmlElement.classList.remove(htmlElement.classList[0]);
    htmlElement.classList.add('abt-click');
    for(let i = 0; i < currentContent.length; i++){
        currentContent[i].remove();
    }
    abtItems();
});

buttonContact.addEventListener("click", (event) =>{
    htmlElement.classList.remove(htmlElement.classList[0]);
    htmlElement.classList.add('cnt-click');
    for(let i = 0; i < currentContent.length; i++){
        currentContent[i].remove();
    }
    cntItems();
});

buttonLinks.addEventListener("click", (event) =>{
    htmlElement.classList.remove(htmlElement.classList[0]);
    htmlElement.classList.add('lnk-click');
    for(let i = 0; i < currentContent.length; i++){
        currentContent[i].remove();
    }
    lnkItems();
});

function projectItems(){
    let newTitle = title;
    newTitle.textContent = "Projects";
    newTitle.id = "project-title";

    let desc = document.createElement('p');
    desc.textContent = "List of projects I have worked on (more on github)"
    desc.id = "project-desc";

    let projectHolder = document.createElement('div');
    projectHolder.id = "project-holder";

    

    currentContent = [title ,desc,projectHolder];
    for(let i = 0; i < currentContent.length; i++){
        theBox.appendChild(currentContent[i]);
    }
}

function abtItems(){
    let newTitle = title;
    newTitle.textContent = "About Me";
    newTitle.id = "abt-title";

    let desc = document.createElement('p');
    desc.textContent = "Hi, my name is Oskaras Zincenko. I am currently a student at Cleveland State University. I am a computer science major with a mathematics minor. I am set to graduate in 2028. I enjoy programming, video games and lifting. I am currently searching for any possible internships";
    desc.id = "abt-desc";

    let experience = document.createElement('h2');
    experience.textContent = "Experience:";
    experience.id = "expp-desc";

    let exp = document.createElement('p');
    exp.textContent = "Html,Css,Javascript,Java,Python,C#,C++";
    exp.id = "exp-desc";

    currentContent = [title,desc,experience,exp];
    for(let i = 0; i < currentContent.length; i++){
        theBox.appendChild(currentContent[i]);
    }
}

function cntItems(){
    let newTitle = title;
    newTitle.textContent = "Contact Info";
    newTitle.id = "cnt-title";

    let email = document.createElement('p');
    email.textContent = "Email: oskaraszincenko@gmail.com";
    let phone = document.createElement('p');
    phone.textContent = "Phone: 267-752-6400";
    let schoolEmail = document.createElement('p');
    schoolEmail.textContent = "School Email: 2895857@vikes.csuohio.edu"

    email.classList.add("contact-stuff");
    phone.classList.add("contact-stuff");
    schoolEmail.classList.add("contact-stuff");


    let buttonResume = document.createElement('div');
    buttonResume.textContent = "RESUME";
    buttonResume.id = "resume-button";
    buttonResume.addEventListener("click", (event) =>{
        console.log("resume download");
    });


    currentContent = [title,email,phone,schoolEmail,buttonResume];
    for(let i = 0; i < currentContent.length; i++){
        theBox.appendChild(currentContent[i]);
    }
}

function lnkItems(){
    let newTitle = title;
    newTitle.textContent = "Links";
    newTitle.id = "lnk-title";


    let socialHolder = document.createElement('div');
    socialHolder.id = "social-holder";

    let git = document.createElement('div');
    let linkd = document.createElement('div');
    let handshake = document.createElement('div');
    git.classList.add('social-links');
    linkd.classList.add('social-links');
    handshake.classList.add('social-links');

    let gitName = document.createElement('h3');
    let hndName = document.createElement('h3');
    let lnkName = document.createElement('h3');

    let imageGit = document.createElement('img');
    let imageHand = document.createElement('img');
    let imageLink = document.createElement('img');



    imageGit.src = "https://images.seeklogo.com/logo-png/50/1/github-icon-logo-png_seeklogo-503247.png";
    imageHand.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDql8BuIAsmd3YEIjw3XTGS08JPPIjMn3iIw&s";
    imageLink.src = "https://ashut0sh75.github.io/Portfolio/static/media/Linkdin.22eebdcb96802b0dc40e.png";

    gitName.textContent = "GitHub";
    hndName.textContent = "HandShake";
    lnkName.textContent = "LinkedIn";

    git.appendChild(gitName);
    gitName.classList.add("social-titles");
    linkd.appendChild(lnkName);
    lnkName.classList.add("social-titles");
    handshake.appendChild(hndName);
    hndName.classList.add("social-titles");

    git.appendChild(imageGit);
    linkd.appendChild(imageLink);
    handshake.appendChild(imageHand);




    socialHolder.appendChild(git);
    socialHolder.appendChild(linkd);
    socialHolder.appendChild(handshake);


    let buttonResume = document.createElement('div');
    buttonResume.textContent = "ANOTHER RESUME";
    buttonResume.id = "resume-button";
    buttonResume.addEventListener("click", (event) =>{
        console.log("resume download");
    });

    git.addEventListener("click", (event) =>{
        console.log("GITHUB");
    });

    handshake.addEventListener("click", (event) =>{
        console.log("HANDHSOAKE");
    });

    linkd.addEventListener("click", (event) =>{
        console.log("LINKEDNIEND");
    });



    currentContent = [title,socialHolder,buttonResume];
    for(let i = 0; i < currentContent.length; i++){
        theBox.appendChild(currentContent[i]);
    }
}

function createProject(name,img){
    //take name and set to name that displays over the image as the background
}