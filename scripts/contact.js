const media = document.querySelector(".contact-media");

const contactList = [
    {
        id:1,
        icon:"fa-solid fa-phone",
        name:"Phone",
        value:"+91 7499373693",
        href:"https://wa.me/917499373693"
    },
    {
        id:2,
        icon:"fa-solid fa-envelope",
        name:"Email",
        value:"pratik.r.vispute@gmail.com",
        href:"mailto:pratik.r.vispute@gmail.com"
    },
    {
        id:3,
        icon:"fa-solid fa-location-dot",
        name:"Country",
        value:"India",
        href:"#"
    }
];


    const contactContent = contactList.map((ele)=>{
        return`
        <div class="media" key=${ele?.id}>
            <span>
                <i class="${ele?.icon}"></i>
            </span>
            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href=${ele?.href}>${ele?.value}</a>
            </div>
        </div>
        `;
    }).join("");

    if(media) media.innerHTML=contactContent;

    //send message

    document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const params = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
    };

    emailjs
        .send("service_p0bdjuf", "template_z2tu0eg", params)
        .then(() => {
            alert("Message Sent Successfully ✅");
            document.getElementById("contact-form").reset();
        })
        .catch((err) => {
            alert("Failed to send ❌");
            console.error("EmailJS Error:", err);
        });
});

