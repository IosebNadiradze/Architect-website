document.addEventListener('scroll', function() {
    const counters = document.querySelectorAll('.counter span');
    const section = document.querySelector('.counter-section');

    if (isInViewport(section)) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const speed = 300; // lower value = faster
            const increment = target / speed;

            const updateCount = () => {
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });

        // Remove scroll event listener after counting starts
        document.removeEventListener('scroll', arguments.callee);
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}