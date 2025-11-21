// login button functionalities : 

document.getElementById("login-button").addEventListener("click",function(event){
    event.preventDefault();     // ! akhon button type submitte  thaklew load hobena . 
    console.log("Login button clicked");

    const mobilenumber = 12345678910;
    const code = 1234;

    const inputmobilenumber = document.getElementById("mobile").value 
    const integermobilenumber = parseInt(inputmobilenumber)

    const inputcode = document.getElementById("code").value ;
    const integercode = parseInt(inputcode) ;

    console.log (integermobilenumber);
    console.log (integercode );

    if(integermobilenumber === mobilenumber && integercode===code){
        window.location.href = "./home.html" 
    }
    else{
        alert("wrong number or pin ");
    }

})


