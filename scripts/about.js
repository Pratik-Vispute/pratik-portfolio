const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', ()=>{
    if(aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab)=>{
    tab.addEventListener('click',(e)=>{
        e.preventDefault();

        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });
        tab.classList.add("active");

        aboutContent.forEach((c)=>{
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if(activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "feb2025 - march2025",
                    position : "Frontend Developer",
                    company: "Codtech IT Solution",
                    details: "Intern"

                },
                {
                  id: 1,
                    date: "-----",
                    position : "--------",
                    company: "--------", 
                    details: "" 
                }
            ];

            const experienceContent = experienceList.map((ele)=>{
                return`
                    <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>

                    </div>
                `;
            }).join("");

            if(experiences){
                experiences.innerHTML = experienceContent;
            }
        }else if(activeTab === "education"){
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2024-2027",
                    degree:"Bachelor of Engineering (IT)",
                    university:"SPPU",
                    details:""
                },
                {
                    id: 2,
                    date: "2021-2022",
                    degree:"SSC (Secondary School Certificate):",
                    university:"Ratilal Virchand Shah School",
                    details:""
                },
                {
                    id: 3,
                    date: "2023-2024",
                    degree:"HSC (Higher Secondary Certificate): ",
                    university:"MSG College",
                    details:""
                },
            ];

            const educationContent = educationList.map((ele)=>{
                return`
                   <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.university}</p>
                        </div>
                        <p>${ele?.details}</p>

                    </div>
                `;
            }).join("");

            if(education){
                education.innerHTML = educationContent;
            }
        } else if(activeTab === "skills"){
            const skills = document.querySelector(".skill-list");

            const skillList = 
            [
                {
                    id:1,
                    name:"HTML - Hyper Text Markup Language",
                    icon: "assets/skills/html.png"
                },
                {
                    id:2,
                    name:"CSS3 - Cascading Style Sheet",
                    icon: "assets/skills/css.png"
                },
                {
                    id:3,
                    name:"Boostrap",
                    icon: "assets/skills/bootstrap.png"
                },
                {
                    id:4,
                    name:"Java Script",
                    icon: "assets/skills/js.png"
                },
                {
                    id:5,
                    name:"MongoDB",
                    icon: "assets/skills/mongodb.png"
                },
                {
                    id:6,
                    name:"Node",
                    icon: "assets/skills/node.png"
                },
                {
                    id:7,
                    name:"React",
                    icon: "assets/skills/react.png"
                },
                
            ];

            const skillContent = skillList.map((ele)=>{
                return`
                 <div class="skill-box" key=${ele?.id}>
                        <img src=${ele?.icon} alt=${ele?.name}
                        title=${ele?.name}
                        loading="lazy" />
                    </div>
                `
            }).join("");

            if(skills){
                skills.innerHTML = skillContent;
            }
        }else if(activeTab === "about-me"){
            const myInfo = document.querySelector("#about-me .my-info");


            const infoList =
             [
                {
                   id:1,
                   key:"Name : ",
                   value: "Pratik Vispute",
                },
                {
                  id: 2,
                   key:"Country : ",
                   value: "India",  
                },
                {
                    id:3,
                   key:"Branch :",
                   value: "Information Technology (IT)",
                },
                {
                    id:4,
                   key:"Address :",
                   value: "Balewadi,Pune",
                },
                {
                    id:5,
                    key:"Experience : ",
                    value:"Fresher",
                },
                
            ];

            const infoContent = infoList.map((ele)=>{
                return`
                  <div class="info-box" key=${ele?.id}> 
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                  </div> 
                `;
            }).join("");

            if(myInfo){
                myInfo.innerHTML = infoContent;
            }
        }
    });
});