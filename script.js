// Get the form element
var form = document.getElementById("myForm");

// Listen for the form submission
form.addEventListener("submit", function (e) {
  // Prevent the form from being submitted
  e.preventDefault();
  console.log("Form Submitted");

  // Example form post, not fully built, just testing in the console
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: "Logan Garcia",
      email: "user@domain.com",
      hand_preference: "Ambidexstrous",
      file: "image.png",
      userId: 3
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
});




// function formdata()
// {
// 	var firstname= document.getElementById("firstname1").value;
// 	var lastname= document.getElementById("lastname1").value;
// 	document.writeln("<h1>Confirmation Page</h1><br>");
// 	document.writeln("Thank you for completing this form.<br><br>");
// 	document.writeln("The first name you entered is " + firstname);
// 	document.writeln("The last name you entered is " + lastname);
// }
