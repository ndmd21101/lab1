(function () {

    function Content(){
        switch (document.title) {
            case "About Us - WEBD6201 LAB 1":
                document.getElementById("aboutus").innerHTML = "I am Duc and I am an international student from Vietnam. I am 19 years old and will be 20 this October. I am expected to graduate this year.";
                break
        }
        switch (document.title) {
            case "Projects - WEBD6201 LAB 1":
                document.getElementById("p1").innerHTML = "1.While I was in 11th grade, Duc and his friends had a project for biology class. In which we had to make alcohol from a fruit that we chose. We chose grapes as it was one of the easiest fruits to make alcohol. The result of the project was to learn about the fermentation.";
                document.getElementById("p2").innerHTML = "2.Throughout Ducs high school years, he played professional futsal for a good while. It was more of a campaign rather than a project but it was something that I was proud of. We were in a touranment that had many stronger clubs than our in the city participated, we were the underdog but somehow we managed to got 3rd place at the end of the touranment."; 
                document.getElementById("p3").innerHTML = "3.The last one, specifically Duc and his friends are planning to make custom mouses and keyboards based off of our interest and hobby is to play games and to do something that is game related. We want to be the best Vietnamese gaming hardware company in the future and to compete agaisnt the top dogs such as Razer, Logitech, etc.";
                break
        }
        switch (document.title) {
            case "Services - WEBD6201 LAB 1":
                document.getElementById("s1").innerHTML = "1. We strive to make the best looking website for all of our clients.";
                document.getElementById("s2").innerHTML = "2. We also make custom functions to make your websites unique in your own way."; 
                document.getElementById("s3").innerHTML = "3. We also design free logo if you choose our company to design your website.";
                break
        }
        switch (document.title){
            case "Home - WEBD6201 LAB 1":
                document.getElementById("welcome").innerHTML="WELCOME TO LAB 1"
        }

        
    }
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    function Projects(){
            document.getElementById("projects").innerHTML = `<a class="nav-link active" href="./projects.html"><i class="fa-solid fa-diagram-project"></i> Projects</a>`;
    }
    function Contact(){
            let element = document.getElementById("submitButton")
            element.addEventListener("click", function(e) {
                e.preventDefault()
                console.log("Name: "+document.getElementById("fullName").value);
                console.log("Contact Number: "+document.getElementById("contactNumber").value);
                console.log("Email Address: "+document.getElementById("emailAddress").value);
                setTimeout(()=>{
                    location.href = "index.html"
                },3000);
                return false
            })
            
            
    }

    
    function Start() {
        console.log("App Started!")
        const about = document.getElementById("about")
        human = document.createElement("li")
        human.innerHTML = `<a class="nav-link" href="#"><i class="fa-light fa-person"></i> Human Resources</a>`
        human.classList.add("nav-item")
        about.parentNode.insertBefore(human, about.nextSibling)

        Projects()
        Content()
        switch(document.title){
            case "Contact Us - WEBD6201 LAB 1":
            Contact()
            break
        }
    }



    window.addEventListener("load", Start)
})()