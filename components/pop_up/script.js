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
    const selectPhone = document.querySelector('.form_select_phone')
    const label = document.querySelector('.label_select')
    const wrapperInput = document.querySelector('.wrapper_input')
    const registerDesc = document.querySelector('.register_desc');

    function renderPhoneInput() {
        label.innerHTML = 'Телефон'
        wrapperInput.innerHTML = `<input
                                    id="RegisterForm_contact"
                                    name="RegisterForm[contact]"
                                    type="tel"
                                    class="form_input">`
        registerDesc.innerHTML = 'Введите актуальный номер телефона,<br> чтобы получить свой подарок.'
        initialInput();
    }
    function renderEmailInput() {
        label.innerHTML = 'Email'
        wrapperInput.innerHTML = `<input
                                    id="RegisterForm_contact"
                                    name="RegisterForm[contact]"
                                    type="tel"
                                    class="form_input" placeholder="Введите email">`
        registerDesc.innerHTML = 'Введите актуальный email,<br> чтобы получить свой подарок.'
    }
    if(popUpSelectors.length !== 0) {
        popUpSelectors.forEach(item => {
            item.addEventListener('click', function () {
                popUpSelectors.forEach(selector => {
                    selector.classList.remove('active')
                })
                item.classList.add('active')
                selectPhone.classList.contains('active')
                    ? renderPhoneInput()
                    : renderEmailInput()
            })
        })
    }
}
export default popUpActivate
