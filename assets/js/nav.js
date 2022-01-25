// button to open nav bar on smaller screens
var btn = document.getElementById("mobile-menu-button");
var menu = document.getElementById("mobile-menu");// Open modal when button is clicked

btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});


//Age Verification
var ageModal = document.getElementById("age-modal");
var noBtn = document.getElementById("no-btn");
var yesBtn = document.getElementById("yes-btn");
var tooYoung = document.getElementById("underage");
var mainSection = document.getElementById("main-section")

yesBtn.addEventListener("click", function (event) {
    event.preventDefault();
    ageModal.style.display = "none";
    mainSection.style.display = "block";
    sessionStorage.setItem("ageConfirmation", "Yes")
})

noBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var warning = document.createElement("p");
    warning.classList.add("mt-3", "leading-6", "font-medium", "text-gray-900")
    warning.textContent = "You are too young to enter the website.";
    tooYoung.append(warning);
    sessionStorage.setItem("ageConfirmation", "No")
})

var ageConf = sessionStorage.getItem("ageConfirmation")
console.log(ageConf)

function savedAge ()  {
    if (ageConf === "Yes") {
        ageModal.style.display = "none";
        mainSection.style.display = "block";
    };
    
    if (ageConf === "No") {
        var warning = document.createElement("p");
        warning.classList.add("mt-3", "leading-6", "font-medium", "text-gray-900")
        warning.textContent = "You are too young to enter the website.";
        tooYoung.append(warning);
    };
}

savedAge()