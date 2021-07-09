const contactform = document.querySelector(".contactform");

const apiUrl = "http://localhost:3000/contactus/sendmail";

// .addEventListener("submit", (event) => {
//     preventDefault(event);

// })
contactform.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value;
  
   
      console.log(email);
      console.log(username);
      fetch((apiUrl), {
          method: "POST",
        headers: {
              
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000",
              "Access-Control-Request-Method": "POST"
          },
          body: JSON.stringify({ username,email,message }),
      })
        .then((res) => {
          // console.log(res);
              return res.json();
            
          } )
      .then((data) => {
          console.log(data);
          location.href="../../index.html"
          alert(data.message);
          
      })
      .catch((err) => {
        // alert("Error Signing In!!! Re-try....");
        console.log(err);
      });
  });
  