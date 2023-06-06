(function (d, m) {

    /*---------------- Kommunicate settings start ----------------*/

    var kommunicateSettings = {
        "appId": APP_ID,
        "automaticChatOpenOnNavigation": true,
        "popupWidget": true,
        "restartConversationByUser": true,
        "preLeadCollection": [{
            "field": "Name", // Name of the field you want to add
            "required": true, // Set 'true' to make it a mandatory field
            "placeholder": "Informe seu nome" // add whatever text you want to show in the placeholder
        },
        {
            "field": "Email",
            "type": "email",
            "required": true,
            "placeholder": "Informe seu email"
        },
        {
            "field": "Phone",
            "type": "number",
            "required": true,
            "element": "input", // Optional field (Possible values: textarea or input)
            "placeholder": "Informe seu telefone"
        }

        ],
        "preLeadMessage": "Antes de começar, precisamos de alguns detalhes para que possamos atendê-lo melhor."

        // onInit: function (e){

        // },
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