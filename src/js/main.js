document.querySelectorAll('.tab-header').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab-header').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-content > .col').forEach(content => {
            if (content.id === tabId) {
                content.classList.remove('d-none');
                content.classList.add('active');
            } else {
                content.classList.remove('active');
                content.classList.add('d-none');
            }
        });
    });
});
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault(); 
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const buffer = 150; 

    return (
        rect.bottom > -buffer &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) + buffer
    );
}

function checkVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
        else {
            section.classList.remove('visible'); // 
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
