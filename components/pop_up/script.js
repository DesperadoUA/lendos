function popUpActivate() {
    const popUpActivate = document.querySelector('.pop_up_activate')
    if(popUpActivate) {
        const popUp = document.querySelector('.pop_up_wrapper')
        const popUpWrapper = document.querySelector('.pop_up_wrapper')
        const popUpConteiner = document.querySelector('.pop_up_container')
        popUpActivate.addEventListener('click', function () {
            popUp.classList.add('pop_up_activate')
        })
        popUpWrapper.addEventListener('click', function () {
            popUp.classList.remove('pop_up_activate')
        })
        popUpConteiner.addEventListener('click', function (event) {
            event.stopPropagation();
        })
    }
    const popUpSelectors = document.querySelectorAll('.pop_up_selector')

    if(popUpSelectors.length !== 0) {
        const phone = document.querySelector('.pop_up_phone')
        const email = document.querySelector('.pop_up_email');
        popUpSelectors.forEach(item => {
            item.addEventListener('click', function () {
                popUpSelectors.forEach(selector => {
                    selector.classList.remove('active')
                })
                item.classList.add('active')
                if(phone.classList.contains('hide')) {
                    phone.classList.remove('hide')
                    email.classList.add('hide')
                }
                else {
                    phone.classList.add('hide')
                    email.classList.remove('hide')
                }
            })
        })
    }
}
export default popUpActivate