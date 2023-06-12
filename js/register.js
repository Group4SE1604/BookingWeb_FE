$('.owl-register').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    center: true,
    margin: 0,
    autoplay: true
});

const pwShowHide = document.querySelectorAll(".eye-icon"),
    pwFields = document.querySelectorAll(".input-pass")

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        if (eyeIcon === pwShowHide[0]) {
            if (pwFields[0].type === "password") {
                pwFields[0].type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            pwFields[0].type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else if (eyeIcon === pwShowHide[1]) {
            if (pwFields[1].type === "password") {
                pwFields[1].type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            pwFields[1].type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
})