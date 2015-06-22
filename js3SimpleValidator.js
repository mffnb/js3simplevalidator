
// var phone = prompt("please enter your phone number with dashes (not for spam)");
// 	console.log(phone.length);

// 	if ((phone.charAt(3) === "-") && (phone.charAt(7) === "-") && (phone.length === 12)){
// 		var validPhone = true;
// 	}
// 	console.log("You entered:" + phone + ", a valid phone number:" + validPhone );

// var dob = prompt("please enter your dob as xx/xx/xxxx (not for spam)");

// 	if ((dob.charAt(2) === "/") && (dob.charAt(5) === "/") && (dob.length === 10)){
// 		var validDob = true;
// 	}
// 	console.log("You entered:" + dob + ", a valid date of birth:" + validDob );

var zip = prompt("please enter your zip code as xxxxx or xxxxx-xxxx (not for spam)");

	if ((zip.length === 5) || (zip.charAt(5) === "-") && (zip.length === 10)){
		var validZip = true;
	}
	else var validZip = false;
	console.log("You entered:" + zip + ", a valid zip code:" + validZip );

	// notes from Rob //check out isNumber, typeOf (returns string of "number" or "string" or "boolean")

	// can loop over a string to check if each character is a number or a slash