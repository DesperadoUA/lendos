<div class="pop_up_wrapper">
    <div class="pop_up_container">
        <div class="pop_up_left">
            <p class="pop_up_title"><b>Зарегистрируйся,
                    чтобы стереть свой билет</b></p>
            <div class="pop_up_container_ticket">
                <div class="pop_up_item_ticket">
                    <div class="pop_up_ticket">
                        <p class="pop_up_ticket_title">Обычный билет</p>
                        <div class="pop_up_wrapper_button">
                            <button class="pop_up_button">
                                <img src="/components/pop_up/img/coin.png"
                                     class="button_coin"
                                     loading='lazy'
                                >
                                <span>1-7</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="pop_up_item_ticket">
                    <div class="pop_up_ticket">
                        <p class="pop_up_ticket_title">Супербилет</p>
                        <div class="pop_up_wrapper_button">
                            <button class="pop_up_button">
                                <img src="/components/pop_up/img/coin.png" class="button_coin">
                                <span>77</span></button>
                        </div>
                    </div>
                </div>
                <div class="pop_up_item_ticket">
                    <div class="pop_up_ticket">
                        <p class="pop_up_ticket_title">Мегабилет</p>
                        <div class="pop_up_wrapper_button">
                            <button class="pop_up_button">
                                <img src="/components/pop_up/img/coin.png" class="button_coin">
                                <span>777</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/components/pop_up/img/men.png" class="pop_up_men" loading='lazy'>
            <img src="/components/pop_up/img/mobile_men.png" class="pop_up_men_mobile" loading='lazy'>
            <img src="/components/pop_up/img/text.png" class="pop_up_text" loading='lazy'>
        </div>
        <div class="pop_up_right">
            <form id="RegisterForm">
                <p class="form_title">Регистрация</p>
                <div class="form_select_wrapper">
                    <div class="form_select_phone active pop_up_selector">Телефон</div>
                    <div class="form_select_email pop_up_selector">Email</div>
                </div>
                <div class="pop_up_phone">
                    <label class="label_select">Телефон</label>
                    <input
                            type="text"
                            id="RegisterForm_contact"
                            name="RegisterForm[contact]"
                            class="form_input"
                            placeholder="Введите ваш телефон"
                    >
                    <div class="error" id="register-contact-error" style="display:none;"></div>
                </div>
                <div class="pop_up_email hide">
                    <label class="label_select">Email</label>
                    <input
                            type="text"
                            id="RegisterForm_contact_email"
                            name="RegisterForm[contact]"
                            class="form_input"
                            placeholder="Введите ваш email"
                    >
                    <div class="error" id="register-contact-error" style="display:none;"></div>
                </div>
                <div class="form_wrapper_btn">
                    <button id="register" class="btn">Регистрация</button>
                </div>
            </form>
            <p class="pop_up_text_register">Вы уже зарегистрированы? <a id="login-btn" href="#">Войти</a></p>
        </div>
    </div>
</div>
