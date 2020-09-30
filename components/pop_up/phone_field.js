function initialInput(){
    const input = document.querySelector("#RegisterForm_contact")
    const intl = window.intlTelInput(input, {
        initialCountry: "ua",
        geoIpLookup: function(success, failure) {
            $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
        utilsScript: "/components/pop_up/utils.js"
    });
}
initialInput();

