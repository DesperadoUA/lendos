<div class="payments_wrapper">
    <?php
        $arr_img = ['/components/payments/img/18.png', '/components/payments/img/ssl.png',
            '/components/payments/img/hands.png', '/components/payments/img/Curaçao_Shields.png',
            '/components/payments/img/private.png', '/components/payments/img/Fill.png',
            '/components/payments/img/verified-visa-master.png', '/components/payments/img/qiwi.png',
            '/components/payments/img/sberbank.png', '/components/payments/img/yandex.png'];

        foreach ($arr_img as $img) {
            echo "<div class='payments_item'>
                     <img src='{$img}' loading='lazy'>
                  </div>";
        }
    ?>
</div>