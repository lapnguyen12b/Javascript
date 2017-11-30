
function check(){
	checkName = document.getElementById("err");
	checkLname = document.getElementById("errLastname");
	fname = document.getElementById("firstname").value;
	lname = document.getElementById("lastname").value;
	if (isNaN(fname)== false || isNaN(lname)== false) {
		checkName.classList.add("MyClass");
		return false;
	}
	return true;
}
// Add file image
function readURL(){
   var file = document.getElementById("getval").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";        
   };
   if(file){
      reader.readAsDataURL(file);
    }
   	return true;
}
//check number 10 digit
function checkPhone(){
	PhoneNum = document.getElementById("checkPhoneNumber");
	phone = document.fiel.area + document.fiel.area +document.fiel.area;
	for (i = 0; i < phone.length; i++) {
		if (phone.charAt(i) < "0" || phone.charAt(i) > "9") {
			PhoneNum.classList.add("MyClass");
			return false;
		}
	}
	if (phone.lenght < 10) {
		PhoneNum.classList.add("MyClass");
		return false;
	}
	return true;
}
//set cOOkie

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Cookie ! Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}