const menuButton = document.querySelector('.burger')
const menu = document.querySelector('.navbar')
const closeMenuButton = document.querySelector('.close')

menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('visible')
    setTimeout(() => {
        menu.classList.add('is-open')
    }, 100)

})

menu.addEventListener('click', (e) => {
    const target = e.target

    if (target === closeMenuButton || target.matches('.menu-link[href^="#"]')) {
        menu.classList.remove('is-open')
        setTimeout(() => {
            menu.classList.toggle('visible')
        }, 500) 
    }
})


const heroForm = document.querySelector('.hero-form')

heroForm.addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = 'page.html'
})


const moreOffersBtn = document.getElementById('moreOffersBtn')
const offersWrapper = document.querySelector('.offers-wrapper')
const offer = `
<div class="offer d-flex align-items-center flex-column flex-lg-row">
    <div class="offer-img mb-4 mb-lg-0"></div>
    <div class="offer-title mb-4 mb-lg-0">
        <h3 class="offer-heading">Back-end разработчик</h3>
        <span class="offer-place">Технопарк, Казань</span>
    </div>
    <span class="offer-salary mb-4 mb-lg-0">70 000 ₽</span>
    <div class="tags-group">
        <span class="tags-label">Требования:</span>
        <a href="#" class="tag">PHP</a>
        <a href="#" class="tag">MySQL</a>
        <a href="#" class="tag">Git</a>
    </div>
    <a href="page.html" class="more mt-5 mt-lg-0">Подробнее →</a>
</div>`
let amountOffers = 4

moreOffersBtn.addEventListener('click', (e) => {
    for (let i = 1; i <= amountOffers; i++) {
        offersWrapper.insertAdjacentHTML("beforeend", offer)   
    }
})


const subscribeForm = document.querySelector('.subscribe-form')
const subscribeInput = document.querySelector('.subscribe-input')
const subscribeSubtitle = document.querySelector('.subscribe-subtitle')

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = subscribeInput.value.toLowerCase().trim()

    if (inputValue === '') return
    subscribeSubtitle.textContent = `E-mail: ${inputValue} успешно подписан на рассылку`
    subscribeForm.reset()

    setTimeout(() => {
        subscribeSubtitle.textContent = 'Мы отправляем по одному письму в неделю с подходящими вам вакансиями'
    }, 8000)
})

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)