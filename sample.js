
const email_box = document.getElementById('email');
const password_box = document.getElementById('password');
const submit_button = document.getElementById('submit');
const output = document.querySelector('.output');
const message= document.querySelector('.message');
const message2= document.querySelector('.message2');
const good= document.querySelector('.good');

//  const form = document.querySelector('form');


submit_button.addEventListener("click", validateForm)




function validateForm(eventDeatils){
    //console.log("All good to go!")
    eventDeatils.preventDefault();
    let email = email_box.value;
    let password = password_box.value;

if(email==""){
    //alert("Make sure email is more than 3 characters and has @ and a .")
    message.innerHTML = "Make sure email is more than 3 characters and has @ and a ."
    message.style.color ="red"
    message.style.fontSize ="1.5rem"
    message.style.fontWeight = "bold"
    message.style.textAlign = "center"
    message.style.margin="10px 0"
    message.style.padding="10px"
    message.style.border="1px solid red"
    message.style.borderRadius="5px"
    message.style.backgroundColor = "rgba(255,0,0,0.1)"
    return
   }
else if(password < 8){
    message2.innerHTML = "Make sure password is more than 8 characters."
    
    message2.style.color ="red"
    message2.style.fontSize ="1.5rem"
    message2.style.fontWeight = "bold"
    message2.style.textAlign = "center"
    message2.style.margin="10px 0"
    message2.style.padding="10px"
    message2.style.border="1px solid red"
    message2.style.borderRadius="5px"
    message2.style.backgroundColor = "rgba(255,0,0,0.1)"
    return
  }

 
    good.innerHTML = "All good to go!"
    
    good.style.color ="yellow"
    good.style.fontSize ="1.5rem"
    good.style.fontWeight = "bold"
    good.style.textAlign = "center"
    good.style.margin="10px 0"
    good.style.padding="10px"
    good.style.border="1px solid red"
    good.style.borderRadius="5px"
    good.style.backgroundColor = "rgba(255,0,0,0.1)"
    return
  
  




//Email & PASSWORD
//output.innerHTML = `
//<p>Email: ${email}</p>
//<p>Password: ${password}</b>
//`


}