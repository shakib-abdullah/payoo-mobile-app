// ! default e  fast e sudhu home section run korbe . 
    document.getElementById("home-section").style.display="block";

    document.getElementById("add-money-section").style.display="none" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="none" ;



document.getElementById("add-money-btn").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="block" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="none" ;

})

document.getElementById("cashout-btn").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="none" ;
 
    document.getElementById("cash-out").style.display="block" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="none" ;

})

document.getElementById("transfer-money-btn").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="none" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="block";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="none" ;

})

document.getElementById("get-bonus-btn").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="none" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="block" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="none" ;

})

document.getElementById("pay-bill-btn").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="none" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="block" ;
    document.getElementById("transaction").style.display="none" ;

})

document.getElementById("transaction-btn").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="none" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="block" ;

})


//! log out button : 

document.getElementById("logout-button").addEventListener("click",function(){
    window.location.href = "index.html"
})


// !   Add money feacher  : 

// console.log(" add-money js file connected ");
const valid_pin = 1234;

document.getElementById("add-money").addEventListener("click",function(){
    console.log("add button clicked successfully");

    const bank = document.getElementById("bank").value

    const acount_number = document.getElementById("acount-number").value

    const add_amount = parseInt(document.getElementById("add-amount").value) ;

    const pin = parseInt(document.getElementById("pin").value);

    const available_balance = parseInt(document.getElementById("prev-balance").innerText) ;

    
    console.log(bank , acount_number , add_amount , pin, available_balance );

    if(acount_number.length != 11){
        alert("invalid acoount number");
        return ;
    }
    if(pin != valid_pin){
        alert("invalid pin  ");
        return ;
    }

    const updated_balance = add_amount + available_balance ;

    document.getElementById("prev-balance").innerText = updated_balance ;
})

// ! cash out feacher : 

document.getElementById("withdraw-money").addEventListener("click",function(e){
    const agent_number = document.getElementById("agent-number").value;

    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const pin = parseInt(document.getElementById("withdraw-pin").value)

    const available_balance = parseInt(document.getElementById("prev-balance").innerText) ;

    console.log(agent_number , amount , pin ,available_balance )

     if(agent_number.length != 11){
        alert("invalid agent number");
     }
    if(pin != 1234){
        alert("invalide pin ")
    }
    if(amount > available_balance){
        alert(" fokir eto taka nai tor ")
    }

    const u_balance = available_balance - amount ;

    document.getElementById("prev-balance").innerText = u_balance ;

})