const pwShowHide = document.querySelectorAll(".eye-icon"),
pwFields = document.querySelectorAll(".input-pass")

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        })

    })
})

$('.owl-login').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    center: true,
    margin: 0
});