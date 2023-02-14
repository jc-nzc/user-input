function formData(){
  console.log("Form Submitted");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("fName").value,
      email: document.getElementById("lName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
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
    document.getElementById("response").innerHTML = "Success!";
  })
  .catch(function (error) {
    console.warn("Something went wrong.", error);
    document.getElementById("response").innerHTML = "Error!";
  });
};
console.log("sanity check");
