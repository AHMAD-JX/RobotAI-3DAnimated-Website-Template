






WebFont.load({
    google: {
        families: ["Roboto Mono:regular", "Roboto Mono:500"]
    }
});


! function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);






window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
if (localStorage.getItem('consentMode') === null) {
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'denied',
    });
} else {
    gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
}


// Google Tag Manager 

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });

    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';

    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K43K2ZQ');



window.__WEBFLOW_CURRENCY_SETTINGS = {
    "currencyCode": "USD",
    "symbol": "$",
    "decimal": ".",
    "fractionDigits": 2,
    "group": ",",
    "template": "{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}",
    "hideDecimalForWholeNumbers": false
};


// avoid quick flash of default text


(function hideEmblem() {


    var el = document.createElement('style');


    document.head.appendChild(el);


    var styleSheet = el.sheet;


    styleSheet.insertRule('.certik-emblem { display: none; }', 0);


})();



/* selectContract */
function selectContract() {
    let selectBtns = document.querySelectorAll(".js-select-contract");
    let toggleContractDropdown = document.querySelector(".js-toggle-contract-dropdown");
    let contractDropdown = document.querySelector(".js-contract-dropdown");

    if (selectBtns) {
        toggleContractDropdown.addEventListener("click", function (e) {
            e.preventDefault();
            if (contractDropdown.classList.contains("is-open")) {
                contractDropdown.classList.remove("is-open");
                toggleContractDropdown.classList.remove("is-active");
            } else {
                contractDropdown.classList.add("is-open");
                toggleContractDropdown.classList.add("is-active");
            }
        });

        selectBtns.forEach((selectBtn) => {
            selectBtn.addEventListener("click", function (e) {
                e.preventDefault();
                let copyId = selectBtn.getAttribute("data-code-option");
                let copyText = document.querySelector("[data-copied='" + copyId + "']");
                let copyTextValue = copyText.value;
                let copyTextFeat = document.querySelector("[data-copied='00']");
                let selectedOptionThumb = selectBtn.querySelector(".copy-company-thumb").innerHTML;
                let selectedOptionName = selectBtn.querySelector(".copy-code-label.hide-in-mobile").innerHTML;
                let selectedOptionNameMob = selectBtn.querySelector(".copy-code-label.show-in-mobile").innerHTML;
                document.querySelector(".contractor-feat .copy-company-thumb").innerHTML = selectedOptionThumb;
                document.querySelector(".contractor-feat .copy-code-label.hide-in-mobile").innerHTML = selectedOptionName;
                document.querySelector(".contractor-feat .copy-code-label.show-in-mobile").innerHTML = selectedOptionNameMob;
                copyTextFeat.setAttribute("value", copyTextValue);
                if (contractDropdown.classList.contains("is-open")) {
                    contractDropdown.classList.remove("is-open");
                    toggleContractDropdown.classList.remove("is-active");
                }
            });
        })
    }
}
selectContract();



document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        $("#learn-more-blog").detach().appendTo($("#blog-slider .media-slider-item").last());
    }, 4000);
});




document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        $("#learn-more-videos").detach().appendTo($("#videos-slider .media-slider-item").last());
    }, 4000);
});




var cookie3Options = {
    "siteId": 214,
    "additionalTracking": true,
    "cookielessEnabled": true
}
window._paq = window._paq || [];
(function () {
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://cdn.cookie3.co/scripts/analytics/latest/cookie3.analytics.min.js';
    s.parentNode.insertBefore(g, s);
})();


function hideBanner() {
    document.getElementById('cookie-consent-banner').style.display = 'none';
}
document.getElementById('btn-hide-banner').addEventListener('click', function () {
    hideBanner();
});
document.getElementById('btn-hide-banner-mob').addEventListener('click', function () {
    hideBanner();
});
if (localStorage.getItem('consentMode') === null) {
    document.getElementById('btn-accept-all').addEventListener('click', function () {
        setConsent({
            necessary: true,
            analytics: true,
            preferences: true,
            marketing: true,
            userdata: true,
            personalization: true
        });
        hideBanner();
    });
    document.getElementById('btn-reject-all').addEventListener('click', function () {
        setConsent({
            necessary: false,
            analytics: false,
            preferences: false,
            marketing: false,
            userdata: false,
            personalization: false
        });
        hideBanner();
    });
    document.getElementById('cookie-consent-banner').style.display = 'flex';
}

function setConsent(consent) {
    const consentMode = {
        'ad_storage': consent.marketing ? 'granted' : 'denied',
        'ad_user_data': consent.userdata ? 'granted' : 'denied',
        'ad_personalization': consent.personalization ? 'granted' : 'denied',
        'analytics_storage': consent.analytics ? 'granted' : 'denied',
        'personalization_storage': consent.preferences ? 'granted' : 'denied',
        'functionality_storage': consent.necessary ? 'granted' : 'denied',
        'security_storage': consent.necessary ? 'granted' : 'denied',
    };
    gtag('consent', 'update', consentMode);
    localStorage.setItem('consentMode', JSON.stringify(consentMode));
}

function CheckSiteVersion() {
    const productionDomain = "www.chaingpt.org";
    const stageDomain = "chain-gpt.webflow.io";
    const currentDomain = window.location.hostname;
    if (currentDomain === stageDomain) {
        document.body.classList.add("stage-site");
    }
    if (currentDomain === productionDomain) {
        document.body.classList.add("prod-site");
    }

    const path = window.location.pathname;
    if (path.startsWith('/ko') || path.startsWith('/ko/')) {
        document.body.classList.add("korean-language");
    }

    document.body.classList.add("page-ready");
}
CheckSiteVersion();


document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (!link.rel.includes("noreferrer")) {
        link.rel += " noreferrer";
    }
    if (!link.rel.includes("noopener")) {
        link.rel += " noopener";
    }
});



$(document).ready(function () {
    $('.case-item-image-wrapper').each(function () {
        let color = $(this).find('.case-bg-color').text();
        $(this).find('.case-item-bg-gradient').css('background', 'linear-gradient(134.28deg, ' + color + ' 10.03%, rgba(9, 9, 14, 0) 42.81%)');
    });

    let switcherHandler = function () {
        let switcher = $('#pricing-switcher-wrapper');
        if (switcher.hasClass('active')) {
            $('#pricing-api').fadeOut('fast', () => $('#pricing-sdk').fadeIn())
        } else {
            $('#pricing-sdk').fadeOut('fast', () => $('#pricing-api').fadeIn())
        }
        switcher.toggleClass('active');
        $('#pricing-switcher-wrapper-point').toggleClass('active');
    }
    $(document).on('click', '#pricing-switcher-wrapper', switcherHandler);
    $(document).on('click', '.price-slide-icon', function (e) {
        let parent = $(e.target).closest('.pricing-clip-col');
        if (parent.hasClass('active')) {
            parent.removeClass('active');
            parent.find('.features-list').slideUp();
            parent.find('.pricing-clip-action').slideUp();
        } else {
            parent.addClass('active');
            parent.find('.features-list').slideDown();
            parent.find('.pricing-clip-action').slideDown();
        }
    });
});
