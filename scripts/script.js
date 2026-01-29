const toggle = document.getElementById("Menu-toggle");

if(toggle){
    toggle.addEventListener("change", () =>{
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

const words = ["Web Developer", "Data Scientist"];

const typingtext = document.getElementById("typing-span")

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWorddelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingtext.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(type, nextWorddelay);
        }else{
            setTimeout(type, typingDelay);
        }
    }else{
        typingtext.textContent = currentWord.substring(0,charIndex-1);
        charIndex--;
         
        if(charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) %
            words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () =>{
    if(words?.length) type();
})

const navlinks = document.querySelectorAll(".navlink");

const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();

        navlinks.forEach((l)=>{
            if(l=== link){
                l.classList.add("active")
            }else{
                l.classList.remove("active")
            }
            
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab)=>{
            if(tab.id === tabName){
                tab.classList.add("active");
            }else{
                 tab.classList.remove("active");
            }
                
        });

        if(tabName === "Services"){
                const serviceList = 
                [
                    {
                        id :1,
                        icon :"bx-code-alt",
                        text:"Frontend Development",
                        para:"Building interactive, visually appealing, and responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks..", 
                    },
                    {
                        id :2,
                        icon :"bx-camera-alt",
                        text:"Portfolio Websites",
                        para:"Creating personal portfolio and resume websites to showcase skills, projects, and professional identity.",
                    },
                    {
                        id :3,
                        icon :"bx-pencil-draw",
                        text:"UI/UX design",
                        para:"Designing clean, intuitive, and user-friendly interfaces that enhance usability and deliver a smooth user experience.",
                    },
                    {
                        id :4,
                        icon :"bx-pencil-draw",
                        text:"Website Redesign",
                        para:"Designing clean, intuitive, and user-friendly interfaces that enhance usability and deliver a smooth user experience.",
                    },
                    {
                      id :5,
                        icon :"bx-webhook",
                        text:"Web Applications",
                        para:"Developing dynamic web applications with basic backend integration, forms, and API handling.",  
                    },
                    {
                        id :6,
                        icon :"bx-mobile",
                        text:"Responsive Design",
                        para:"Creating mobile-first, responsive layouts that work seamlessly across all screen sizes.",  
                    },
                    
                ];

                    const services = document.getElementsByClassName("service-list");

                    const innerContent = serviceList.map((l)=>
                    {
                        return `
                            <div class="box" key=${l?.id}>
                    <div class="head-icons">
                        <i class='bx  ${l?.icon}'></i> 
                       <span> <i class='bxr  bx-caret-right-circle'></i> </span>
                    </div>

                    <h3>${l?.text}</h3>
                    <span class="spacer"></span>

                    <p>${l?.para}</p>
                </div>
                        `;
                     
                    }).join("");

             Array.from(services).forEach((ele) => {
                ele.innerHTML = innerContent;
                });

        }

        toggle.checked = false
    
    });
});

