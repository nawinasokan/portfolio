// experience time calculation
const startDate = new Date("2024-08-12");
const today = new Date();

let totalMonths =
(today.getFullYear() - startDate.getFullYear()) * 12 +
(today.getMonth() - startDate.getMonth()) + 1; // +1 to include current month

const years = Math.floor(totalMonths / 12);
const months = totalMonths % 12;

let durationText = "AUG 2024 - Present ";

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
        link.style.color = "var(--color-blue-500)";
      } else {
        link.style.color = "var(--color-white)";
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});



// for projects section description
function isMobile() {
  return window.innerWidth <= 768; 
}

function showDescription(cardNum) {
  if (isMobile()) {
    hideAllMobileDescriptions();

    const card = document.querySelector(".card--" + cardNum);
    const mobileDesc = document.createElement("div");
    mobileDesc.classList = "m-4 p-4 text-sm rounded-lg mt-2 text-white space-y-2";
    mobileDesc.dataset.mobileDesc = "true";

    const desc = document.getElementById("desc-" + cardNum).textContent.replace("Description :", "").trim();
    const tech = document.getElementById("tech-" + cardNum).textContent.trim();

    mobileDesc.innerHTML = `
      <p><span style="color:#6ee7b7;">Description :</span> ${desc}</p>
      <p style="color:#6ee7b7;">${tech}</p>
    `;

    card.insertAdjacentElement("afterend", mobileDesc);
  } else {
    document.getElementById("card-description").classList.remove("hidden");

    for (let i = 1; i <= 3; i++) {
      document.getElementById("desc-" + i).classList.add("hidden");
      document.getElementById("tech-" + i).classList.add("hidden");
    }

    document.getElementById("desc-" + cardNum).classList.remove("hidden");
    document.getElementById("tech-" + cardNum).classList.remove("hidden");
  }
}

function hideDescription() {
  if (isMobile()) {
    hideAllMobileDescriptions();
  } else {
    document.getElementById("card-description").classList.add("hidden");
  }
}

function hideAllMobileDescriptions() {
  document.querySelectorAll("[data-mobile-desc='true']").forEach(el => el.remove());
}

window.addEventListener("resize", () => {
  hideAllMobileDescriptions();
  hideDescription();
});
