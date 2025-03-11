const userInput = document.getElementById('user-input');
const resultOutput = document.getElementById('results-div');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');

const validatePhoneNumber = input => {

    const countryCode = '^(\\+234|234|0)';
    const areaCode = '([7-9]{1}[0-1]{1}[0-9]{1})';
    const spaceDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(`${countryCode}${areaCode}${spaceDashes}${phoneNumber}`);

    if(input === '') {
        alert('please enter a phone number');
        return;
    }
   
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    phoneRegex.test(input)
    ?(pTag.style.color = '#000000')
    : (pTag.style.color = '#ff0000');
    pTag.appendChild(
        document.createTextNode(
            `${phoneRegex.test(input) ? 'Valid' : 'Invalid' } Nigerian Phone Number: ${input}`
                )
            );
            resultOutput.appendChild(pTag);
};
checkButton.addEventListener('click', () => {
    validatePhoneNumber(userInput.value);
    userInput.value  = '';
});
userInput.addEventListener('keydown', event =>{
    if (event.key === 'Enter') {
        validatePhoneNumber(userInput.value);
        userInput.value = '';
}
}
);
clearButton.addEventListener('click', () => {
    resultOutput.textContent = '';
});