document.addEventListener('DOMContentLoaded', function () {
    const parallax = document.querySelectorAll('.parallax-image');

    window.addEventListener('scroll', function () {
        let scrollPosition = window.pageYOffset;

        parallax.forEach(function (element, index) {
            let speed = 0.5 * (index + 1);
            element.style.transform = 'translateY(' + scrollPosition * speed + 'px)';
        });
    });
});
