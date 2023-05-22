    

// slide scroll animation
const slide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slide');
        } else {
            entry.target.classList.remove('slide');
        }
    });
});

const slideElements = document.querySelectorAll('.slide-animation');
slideElements.forEach((el) => slide.observe(el));


// fade scroll animation
const fade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fade');
        } else {
            entry.target.classList.remove('fade');
        }
    });
});

const fadeElements = document.querySelectorAll('.fade-animation');
fadeElements.forEach((el) => fade.observe(el));


