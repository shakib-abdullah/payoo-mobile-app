
console.log("js file connected ");
document.getElementById("add-money-section").addEventListener("click",function(){
    console.log("add section clicked successfully");
})



document.getElementById("add-money").addEventListener("click",function(){

    document.getElementById("home-section").style.display="none";

    document.getElementById("add-money-section").style.display="block" ;
 
    document.getElementById("cash-out").style.display="none" ;
    document.getElementById("transfer-money").style.display="none";
    document.getElementById("get-bonus").style.display="none" ;
    document.getElementById("pay-bill").style.display="none" ;
    document.getElementById("transaction").style.display="none" ;

})