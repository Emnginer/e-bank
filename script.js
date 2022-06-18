
//login button event handlerE - Bank
const loginBtn = document.getElementById("login")
loginBtn.addEventListener('click', function () {
    const email = document.getElementById('exampleInputUser1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    if(email === 'emon' && password === '123'){
        const loginPage = document.getElementById("container-wrapper");
        loginPage.style.display = "none";
        const transactionPage = document.getElementById("transaction-area");
        transactionPage.style.display = "block";

      } else{
        alert(`
          wrong user credentials.
          you don't have username and password then provide
             username = emon 
             password = 123
        `)
      }
});

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function () {
    if(document.getElementById("depositAmount").value > 0){
        const depositNumber = getInputNumber("depositAmount") // function calling
        depositTransaction('currentBalance', depositNumber); //function calling
        depositTransaction('currentDeposit', depositNumber);  //function calling
        document.getElementById("depositAmount").value = "";
    } else {
        alert("give that amount you want to deposit")
    }
    
})
// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
    if(document.getElementById("withdrawAmount").value > 0){
        const withdrawNumber = getInputNumber("withdrawAmount") //function calling
        depositTransaction('currentWithdraw', withdrawNumber);
        depositTransaction('currentBalance', -1 * withdrawNumber);
        document.getElementById("withdrawAmount").value = "";
    } else{
        alert("give that amount you want to withdraw")
    }
    
})

function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function depositTransaction(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance
}




 // const currentDeposit =  document.getElementById("currentDeposit").innerText;
 // const currentDepositNumber =  parseFloat(currentDeposit)
 // const totalDeposit = depositNumber + currentDepositNumber
 // document.getElementById("currentDeposit").innerText = totalDeposit;
