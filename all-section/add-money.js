 console.log(" add-money js file connected ");
const valid_pin = 1234;

document.getElementById("add-money").addEventListener("click",function(){
    console.log("add button clicked successfully");

    const bank = document.getElementById("bank").value

    const acount_number = document.getElementById("acount-number").value

    const add_amount = parseInt(document.getElementById("add-amount").value) ;

    const pin = parseInt(document.getElementById("pin").value);

    console.log(bank , acount_number , add_amount , pin );

    const available_balance = parseInt(document.getElementById("prev-balance").innerText) ;

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


