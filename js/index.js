//admin users
var adminUser = [ 'ervtod', 'hirchr', 'jorass', 'saskru', 'svetor' ];

// local users
var localUser = [ 'aamsta', 'anddar', 'ankov', 'aqulyn', 'aubbla', 'benfau',
		'bratam', 'ceznew', 'dansch', 'didwat', 'domolh', 'edraug', 'einyam',
		'elepic', 'eulcou', 'eusgor', 'felbar', 'felfra', 'fercrn', 'giamik',
		'gollan', 'hyrlap', 'jacabb', 'janhei', 'jeaats', 'jershi', 'jovsit',
		'karbly', 'katfab', 'kaywan', 'kenolg', 'krysan', 'larsch', 'lasnic',
		'liatra', 'livzha', 'maihon', 'marpug', 'marsti', 'molbab', 'muhtof',
		'nikpro', 'olislu', 'olubra', 'oludra', 'orapan', 'pauaaf', 'pomgra',
		'prabar', 'rewes', 'schjou', 'shapet', 'sivan', 'steber', 'sulstr',
		'sulpen', 'symzim', 'teojen', 'tohei', 'valpag', 'yevowe', 'zulgor' ];

function login(){
	
	var username = $('#username').val();
	var password =  $('#password').val();
	
	if(password == username){

		if(adminUser.indexOf(username) != -1){
			sessionStorage.login = username;
			setUser(username,"admin");
			window.location.href = "AdminPage.html";

		}
		else if(localUser.indexOf(username) != -1){
			sessionStorage.login = username;
			setUser(username,"local");
			window.location.href = "UserPage.html";

		}
		else {
			alert("Incorrect username or password!");
		}
	} else {
		alert("Incorrect username or password!");
	}
}

function loginGuest(){
	setUser("Guest","Guest");
	window.location.href = "GuestPage.html";
}

function setUser(username, usertype){
	localStorage.user = username;
	localStorage.type = usertype;
}

function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("type");
    window.location.href = "LoginPage.html";
}