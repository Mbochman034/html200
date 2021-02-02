let balance = 1000;

function start() {
    let keepGoing = true;
    while (keepGoing) {
        keepGoing = askUserInput();
    }
}

function askUserInput() {
   const response = prompt('Enter Q to quit. Enter W to withdraw. Enter D to deposit. Enter B to view balance.');
   switch(response) {
       case "Q": case "q":
           alert('Goodbye!');
           return false;

        case "W": case "w":
            const amount = prompt('How much would you like to withdraw?');
            const updatedBalance = balance - Number(amount);
            if(updatedBalance < 0 ) {
                alert('Insufficient Funds!');   
            } else {
                balance = updatedBalance;
            }
            return true;

        case "D": case "d":
            let depositAmount = prompt('How much would you like to deposit?');
            depositAmount = Number(depositAmount);
            const depositMax = 50000; 
            if(balance + depositAmount > depositMax) {
                alert('You have exceeded the $50,000 maximum deposit amount!')
            } else {
                balance += depositAmount;
            }
            
            return true;

        case "B": case "b":
            alert('You currently have $' + balance);
            return true;

        default:
            alert('Invalid Option Entered!');
            return true;

   }
}

