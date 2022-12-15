let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('nav'),
    header = document.querySelector('header'),
    statisticSection = document.querySelector('#statistic'),
    statisticNum = document.querySelectorAll('.counter-box h3'),
    started = false,
    skillSection = document.querySelector('#skills'),
    progress = document.querySelectorAll('.progress .progress-bar'),
    spans = document.querySelectorAll('.progress-title span'),
    filterProfile = document.querySelectorAll('.portfolio-filter ul li'),
    sections = document.querySelectorAll('section'),
    navLi = document.querySelectorAll('.navbar li a');

/*Hamburger menu button*/
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
});

/*Active Header On Scroll*/
window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

/*Statistic Counter*/
function startCount(el) {
    let goal = el.dataset.count;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= statisticSection.offsetTop - 500) {
        if (!started) {
            statisticNum.forEach((num) => startCount(num));
        }
        started = true;
    }
});

/*Skill Progress Bar*/
window.addEventListener('scroll', () => {
    if (window.scrollY >= skillSection.offsetTop - 100) {
        progress.forEach((prog) => {
            prog.style.width = prog.dataset.width;
        });
        spans.forEach((span) => {
            span.style.left = span.dataset.num;
            span.style.opacity = '1';
            span.style.visibility = 'visible';
        });
    }
});

/*Filter Portfolio*/
filterProfile.forEach((li) => {
    li.addEventListener('click', () => {
        filterProfile.forEach((li) => {
            li.classList.remove('current');
        });
        li.classList.add('current');
    });
});

let mixerPortfolio = mixitup('.portfolio-list', {
    selectors: {
        target: '.box'
    },
    animation: {
        duration: 300
    }
});

/*Testimonial Slider With Bullet Points*/
let swiper = new Swiper(".testimonials-container", {
    spaceBetween: 30,
    Loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*ScrollBar And Scroll Section Active*/
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.dataset.link == current) {
            li.classList.add('active');
        }
    });
});
