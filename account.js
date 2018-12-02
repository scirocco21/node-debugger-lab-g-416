module.exports = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }
  console.log(customerAccount)
  var setAccountType = function () {
    if (customerAccount.checking == 1) {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250,
    deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount
  console.log(customerAccount)
  setAccountType()
  openAccount(customerAccount, deposit)
  console.log(customerAccount)
  output['Account after opening'] = customerAccount
  return output
}
