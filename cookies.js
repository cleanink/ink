document.addEventListener("DOMContentLoaded", function() {
    // Check if the cookie consent has already been given
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookieConsentPopup').style.display = 'block';
    }

    // Handle the accept button click
    document.getElementById('acceptCookiesButton').addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365);
        document.getElementById('cookieConsentPopup').style.display = 'none';
    });
});

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
