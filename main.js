const burgerBtn = document.querySelector('.burger-menu')
const burgerNavMenu = document.querySelector('.main-nav--burger')

burgerBtn.addEventListener('click', e => {
	burgerNavMenu.classList.toggle('show')
	burgerBtn.classList.toggle('burger-menu--transform')
})

document.addEventListener('DOMContentLoaded', function () {
	const hiddenBlock = document.querySelectorAll('.hidden-block')

	function visibleFunc(block) {
		const rect = block.getBoundingClientRect()
		const windowHeight = window.innerHeight

		if (rect.top < windowHeight - 300) {
			block.classList.add('hidden-block--visible')
			block.classList.remove('hidden-block')
		}
	}

	document.addEventListener('scroll', e => {
		hiddenBlock.forEach(block => {
			if (block) {
				visibleFunc(block)
			}
		})
	})
})

const visibleCard = document.querySelectorAll('.customer-card')

const sliderToLeftBtn = document.querySelector('.customer__btn--left')
const sliderToRightBtn = document.querySelector('.customer__btn--right')

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
