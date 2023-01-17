function formdata()
{
	var firstname= document.getElementById("firstname1").value;
	var lastname= document.getElementById("lastname1").value;
	document.writeln("<h1>Confirmation Page</h1><br>");
	document.writeln("Thank you for completing this form.<br><br>");
	document.writeln("The first name you entered is " + firstname);
	document.writeln("The last name you entered is " + lastname);
}
