//JS starts from session 17 in project

//Making adminLogin Btn active  
const controlOfAdminSection =document.getElementById("admin-login");
const controlOfUserMsgsSection =document.getElementById("user-messages");

function showAdminSection(){
  controlOfAdminSection.style.display = "block";
}

//Making adminLogic active
document.getElementById("admin-form").addEventListener('submit',function(event){
  event.preventDefault();
  const username = document.getElementById("usrname").value;
  const password = document.getElementById("pswd").value;
  
  //console.log(username);
  //console.log(password);
  
  //session 19
  //Now store this username and password to verify 
  
  const storedUsername = "admin";
  const storedPswd = "password";
  
  if(username === storedUsername && password === storedPswd)
    {
      alert("Welcome! Login was successful");
      controlOfAdminSection.style.display = "none";
      
      controlOfUserMsgsSection.style.display = "block";
      
      //calling the function to display user messages
      displayStoredMessages();
    }
  else{
    alert("Oops, Login was Un-successful! Please try again");
  } 
})

//Make your contact me section store user responses

document.getElementById("contact-me-form").addEventListener('submit',function(event){
  event.preventDefault();
    const name = document.getElementById("your-name").value;
    const email = document.getElementById("your-email").value;
    const messages = document.getElementById("your-msg").value;
  
  const response = {name, email, messages, date: new Date().toISOString()};
  //console.log(new Date());
  //console.log(response);
  
  //create a reference to Dummy database
  
  // const DummyDB = JSON.parse(localStorage.getItem('DummyDB')) || [];
  let DummyDB = JSON.parse(localStorage.getItem('DummyDB'));
  //if its not an array,reset it to an empty one
  
  if(!Array.isArray(DummyDB)){
    DummyDB =[];
  }
  //console.log(DummyDB);
  DummyDB.push(response);
  console.log(DummyDB);
  localStorage.setItem('DummyDB',JSON.stringify(DummyDB));  
  alert("Thank You for your message,I'll get in touch with you ASAP");
  this.reset();
});

const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener('click',function() {
  document.body.classList.toggle("dark-mode");
});

//when the user enter correct cred, showing all the messages in user messages
function displayStoredMessages(){
  const responseContainer = document.getElementById("sari-messages");
  const DummyDB  = JSON.parse(localStorage.getItem("DummyDB")) || [];
  
  DummyDB.forEach(response=>{
    const responseElement = document.createElement('div');
    
    responseElement.innerHTML = `
    <p> Name: ${response.name}</p>
    <p> Email: ${response.email}</p>
    <p> Message: ${response.messages}</p>
    <p> Date: ${response.date}</p>
    <hr>`
    
    responseContainer.append(responseElement); 
  })
}
//To clear all the messages from local storage
//localStorage.clear();  






