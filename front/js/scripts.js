(function (d, m) {

    /*---------------- Kommunicate settings start ----------------*/

    var kommunicateSettings = {
        "appId": APP_ID,
        "automaticChatOpenOnNavigation": true,
        "popupWidget": true,
        "restartConversationByUser": true,
    };

    /*----------------- Kommunicate settings end ------------------*/

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    window.kommunicate = m;
    m._globals = kommunicateSettings;
})(document, window.kommunicate || {});