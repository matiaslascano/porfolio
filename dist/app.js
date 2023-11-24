const menuButton = document.querySelector('#menuButton')
const menuItems = document.querySelector('#menu')
const menuButtonSpans = document.querySelectorAll('#menuButton span')
const links = document.querySelectorAll('#menu a')


menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden')

    menuButtonSpans.forEach((span) => {
        span.classList.toggle('animado')
    })
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuItems.classList.add('hidden')
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado')
        })
    })
})

window.onresize = function () {
    let w = window.outerWidth
    if (w > 768) {
        menuItems.classList.add('hidden')
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado')
        })
    }
}

const darkButton = document.querySelector('#darkButton')


darkButton.addEventListener('click', function () {

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});