// jQuery document ready function
$(function() {
	translate();
});

function changeLanguage(current_lang) {
	set_language(current_lang);
	translate();
}

function translate() {
	lang = get_language();
		languageDict = dict[lang];

		$('*').each(function() {
		    	if ($(this).attr('language-text')) {

		    		text = $(this).attr('language-text')
		    		translated_text = languageDict[text];

		    		//Buttons
		    		if ($(this).attr("value")) {
		    			$(this).val(translated_text);
		    		}
		    		//PlaceHolders
		    		else if ($(this).attr("placeholder")) {
		    			$(this).attr('placeholder',translated_text);
		    		//Others
		    		}else {
		    			$(this).text(translated_text);
		    		}

		    	}
		    })
}

//Store language as a localstorage variable
function set_language(language) {
	localStorage.language = language;
}

//Get the currently used language
function get_language() {
	if (localStorage.language)
	{
		return localStorage.language;
	}
	else
	{
		return "en";
	}
}

var dict ={
"en": {
    "welcome": "Welcome",
    "username": "Username",
    "password": "Password",
    "guest_login": "Login as guest",
    "login": "Login",
    "statistics": "Statistics",
    "order": "Order",
    "undo": "Undo",
    "redo": "Redo",
    "total sum": "Total sum:",
    "credit": "Credit: £",
    "edit": "Edit",
    "purchases": "Purchases",
    "inventory": "Inventory",
    "users": "Users",
    "newName": "New username",
    "newPw": "New password",
    "newEmail": "New email",
    "newPhoneNr": "New phone number",
    "firstname": "First name",
    "lastname": "Last name",
    "credits": "Credits",
    "submit": "Submit",
    "close": "Cancel",
    "logout": "Logout",
    "guest": "Guest"
},
"sv": {
    "welcome": "välkommen",
    "username": "Användare",
    "password": "Lösenord",
    "guest_login" : "Logga in som gäst",
    "login": "Logga in",
    "statistics": "Statistik",
    "order": "Beställ",
    "undo": "Ångra",
    "redo": "Gör om",
    "total sum": "Total summa:",
    "credit": "Kredit: £",
    "edit": "Ändra",
    "purchases": "Historik",
    "inventory": "Lager",
    "users": "Användare",
    "newName": "Nytt användarnamn",
    "newPw": "Nytt lösenord",
    "newEmail": "Ny mail",
    "newPhoneNr": "Nytt telefonnummer",
    "firstname": "Förnamn",
    "lastname": "Efternamn",
    "credits": "Kredit",
    "submit": "Skicka",
    "close": "Avbryt",
    "logout": "Logga ut",
    "guest": "Gäst"
},
"hin": {
    "welcome": "स्वागत",
    "username": "उपयोगकर्ता नाम",
    "password": "पासवर्ड",
    "guest_login" : "मेहमान लॉगइन",
    "login": "लॉगइन",
    "statistics": "सांख्यिकी",
    "order": "व्यवस्था",
    "undo": "पूर्ववत",
    "redo": "फिर से",
    "total sum": "कुल योग",
    "credit": "श्रेय: £",
    "purchases": "खरीद",
    "edit": "संपादित",
    "inventory": "इन्वेंटरी",
    "users": "उपयोगकर्ताओं",
    "newName": "नया नाम",
    "newPw": "नया पासवर्ड",
    "newEmail": "नई ईमेल",
    "newPhoneNr": "नए फोन नंबर",
    "firstname": "पहला नाम",
    "lastname": "अंतिम नाम",
    "submit": "जमा करें",
    "close": "बंद करे",
    "logout": "लोग आउट",
    "guest": "अतिथि"
}
};


