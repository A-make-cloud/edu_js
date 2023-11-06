const slider = document.getElementById('right-side')
const slides = document.querySelectorAll('.slide-right')
const sliderL = document.getElementById('left-side')
const slidesL = document.querySelectorAll('.slide-left')

const slideHeight = slides[0].offsetHeight * 6
const slideLHeight = slidesL[0].offsetHeight / 6

console.log('left side : ', slideLHeight);
console.log('right side : ', slideHeight);
let currentIndex = 0
let currentIndexL = 0


function updateSlider() {
    const btnUp = document.getElementById('btn_up')
    btnUp.addEventListener('click', () => {

        currentIndex++

        if (currentIndex >= slides.length) {

            currentIndex = 0
            btnUp.classList.remove('ecDdNd')
            btnUp.classList.add('kuJdsF')

            // transition: transform 0.75s ease-in-out 0s;
        }
        // retour haut de page
        else if (currentIndex === slides.length - 1) {

            btnUp.classList.remove('kuJdsF')
            btnUp.classList.add('ecDdNd')


        }

        currentIndexL++
        if (currentIndexL >= slidesL.length) {

            currentIndexL = 0
            btnUp.classList.remove('ecDdNd')
            btnUp.classList.add('kuJdsF')


        }// retour haut de page
        else if (currentIndexL === slidesL.length - 1) {

            btnUp.classList.remove('kuJdsF')
            btnUp.classList.add('ecDdNd')



        }

        slider.style.transform = `translateY(-${currentIndex * 101}vh)`
        sliderL.style.transform = `translateY(-${currentIndexL * 101}vh)`

    })
}
updateSlider()
