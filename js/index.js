// // for modal shw the lanuage description
// const modal = document.getElementById("skillModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalDescription = document.getElementById("modalDescription");
// const closeBtn = document.querySelector(".close");

// const skillDescriptions = {
//     python: "Python is a versatile language used in web development, automation, data science, and more. I used Python to build backend logic and automate repetitive tasks in my projects.",
    
//     django: "Django is a high-level Python web framework that promotes rapid development. I used Django to build secure, scalable web applications with an admin interface out of the box.",
    
//     fastapi: "FastAPI is a modern Python web framework for building APIs quickly with automatic docs. I used FastAPI to create high-performance REST APIs with JWT authentication.",
    
//     sql: "SQL is used to manage and query relational databases efficiently. I used SQL for writing complex queries and managing data in PostgreSQL and SQLite.",
    
//     ai: "AI/ML involve creating intelligent systems that learn and improve from data. I implemented basic ML models to analyze trends and automate decision-making in project workflows.",
    
//     html: "HTML is the standard language for creating webpages. I used HTML to structure all web pages in my frontend development.",
    
//     css: "CSS styles the look and layout of web pages. I used CSS to make responsive and clean UI layouts for dashboards and forms.",
    
//     js: "JavaScript adds interactivity to web pages. I used JavaScript to handle client-side validation, animations, and dynamic page content.",
    
//     aws: "AWS is a cloud platform offering scalable compute, storage, and other services. I deployed web apps on AWS EC2 and used S3 for storing uploaded files.",
    
//     cloud: "Cloud computing enables on-demand access to computing resources over the internet. I used cloud services for scalable hosting, storage, and performance monitoring.",
    
//     git: "Git is a version control system that tracks code changes and supports collaboration. I used Git and GitHub to manage my project versions and collaborate with team members."
// };


// document.querySelectorAll('.skill').forEach(skill => {
//     skill.addEventListener('click', () => {
//     const skillKey = skill.getAttribute('data-skill');
//     modalTitle.textContent = skill.textContent.trim();
//     modalDescription.textContent = skillDescriptions[skillKey] || "Description not available.";
//     modal.style.display = "block";
//     });
// });

// closeBtn.onclick = () => modal.style.display = "none";
// window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// // --------------------------------------------------------------------------------------------

// Calculate the experience from start date dynamically



const startDate = new Date("2024-08-12");
const today = new Date();

let totalMonths =
(today.getFullYear() - startDate.getFullYear()) * 12 +
(today.getMonth() - startDate.getMonth()) + 1; // +1 to include current month

const years = Math.floor(totalMonths / 12);
const months = totalMonths % 12;

let durationText = "Work Experience : AUG 2024 - Present ";

if (years > 0) {
durationText += `( ${years} year${years > 1 ? "s" : ""}`;
if (months > 0) {
    durationText += ` ${months} month${months > 1 ? "s" : ""} )`;
}
} else {
durationText += `( ${months} month${months > 1 ? "s" : ""} )`;
}

document.getElementById("duration").textContent = durationText;



document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 200;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      if (href === currentId) {
        // ACTIVE: set to blue
        link.style.color = "var(--color-blue-500)";
      } else {
        // NOT ACTIVE: set to white
        link.style.color = "var(--color-white)";
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});