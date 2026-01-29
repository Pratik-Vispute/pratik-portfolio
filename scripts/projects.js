
const projectList =[
    {
       id:1,
       Number: "01",
       title: "StopWatch",
       description:"A simple and responsive stopwatch built using HTML, CSS, and JavaScript. Tracks time accurately with Start, Stop, and Reset functionalities.", 
       techStack: ["HTML","CSS","JAVASCRIPT"],
       image: "assets/projects/project1.png",
       livelink: "#",
       githublink: "#", 
    },
    {
        
       id:2,
       Number: "02",
       title: "SAAS Canva Website",
       description:"I`m a curious and enthusiastic web developer who enjoys learning and building creative web projects. I specialize in developing responsive and interactive websites using modern web technologies. My goal is to grow as a developer and contribute to meaningful digital products", 
       techStack: ["MongoDB","Express","React","Node"],
       image: "assets/projects/project2.webp",
       livelink: "#",
       githublink: "#", 
    },
    {
         id:3,
       Number: "03",
       title: "Fullstack Thread Clone",
       description:"I`m a curious and enthusiastic web developer who enjoys learning and building creative web projects. I specialize in developing responsive and interactive websites using modern web technologies. My goal is to grow as a developer and contribute to meaningful digital products", 
       techStack: ["MongoDB","Express","React","Node"],
       image: "assets/projects/project3.webp",
       livelink: "#",
       githublink: "#", 
    },
    
    
    
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProjects = (index) =>{

    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length-1;

    projects.innerHTML = `
    <div class="project-info">
        <h3>${projectContent?.Number}</h3>
        <h4>${projectContent?.title}</h4>
        <p>${projectContent?.description}</p>
        <div class="tech-stack">
            ${
                projectContent?.techStack?.map((tech, i)=>{
                    return `
                        <span key=${i}>${tech}</span>
                    `;
                }).join(",")
            }
        </div>
        <hr></hr>
        <div class="links">
            <a href=${projectContent?.livelink}><i class="fa-solid fa-circle-arrow-right"></i></a>
            <a href=${projectContent?.githublink}><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
     <div class="carousel">
                    <img src=${projectContent?.image} alt=${projectContent?.title} />
                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled?"disabled-btn":""}>
                            <i class="fa-solid fa-circle-arrow-left"></i>
                        </a>
                        <a href="#" id="next" ${nextDisabled?"disabled-btn":""}>
                            <i class="fa-solid fa-circle-arrow-right"></i>
                        </a>
                    </div>
                </div>
    `;

    document.getElementById("previous").addEventListener("click",(e)=>{
        e.preventDefault();

        if(currentIndex>0){
            currentIndex--;
            renderProjects(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click",(e)=>{
        e.preventDefault();

        if(currentIndex < projectList.length-1){
            currentIndex++;
            renderProjects(currentIndex);
        }
    });

};

renderProjects(currentIndex);





