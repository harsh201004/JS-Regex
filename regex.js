function validatePin(pin) {
    const pinPattern = /^(?![A-Za-z])\d{3}\s?\d{3}(?![A-Za-z])$/;
    if (pinPattern.test(pin)) {
        console.log(`Valid PIN: ${pin}`);
        return true;
    } else {
        console.error(`Invalid PIN: ${pin}`);
        return false;
    }
}

//PIN Code UC1
validatePin("400088"); 

//PIN Code UC2
validatePin("A400088");

//PIN Code UC3
validatePin("400088B"); //Invalid Pin 