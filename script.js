////////CHECK IF WEB3//////


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  document.getElementById("submit-form").value = "Donate.ETH requires MetaMask"
  document.getElementById('submit-form').setAttribute('onclick','window.open("https://metamask.io/")')

}

//////////CHECK IF METAMASK IS LOCKED////////

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

else {
  if (accounts.length == 0){
    document.getElementById("submit-form").value = "Your MetaMask is locked"
  }
  else {
    document.getElementById("submit-form").value = "Donate*"
  }
}
})
        
//////////SEND TRANSACTION///////            


function Donate() {

  web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

else {
   
  var account = accounts[0];
  var amount = document.getElementById("amount").value;
  var charity = document.getElementById("charity").value;

web3.eth.sendTransaction({from: account, to: charity, value:web3.toWei(amount, "ether"), gasPrice: web3.toWei(5,'gwei')}, function(error, accounts){});

  
};
});
}

///////////////




