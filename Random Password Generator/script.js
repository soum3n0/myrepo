const inputSlider = document.querySelector('#slider');
const lengthDisplay = document.querySelector('.password-length-counter');
const passwordDisplay = document.querySelector('.password');
const copyBtn = document.querySelector('.copy-icon');
const copyMsg = document.querySelector('.copy-msg');
const uppercaseCheck = document.querySelector('#uppercase');
const lowercaseCheck = document.querySelector('#lowercase');
const numbersCheck = document.querySelector('#numbers');
const symbolCheck = document.querySelector('#symbols');
const indicator = document.querySelector('.strength-circle');
const generateBtn = document.querySelector('.generate-btn');

let password = '';
let passwordLength = 10;

const symbol = '+-/*[]{}()?<>:`~!-_=@#$%^&".,\|_';

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = "0px 0px 18px 5px" + color;
}

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    return getRandomInteger(0, 9);
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateRandomSymbol(){
    return symbol[getRandomInteger(0, symbol.length)];
}

function shufflePassword(arr){
    for(let i = arr.length-1; i>0; i--){
        let randomIndex = Math.floor(Math.random() * (i+1));

        let ch = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = ch;
    }
    
    let str = '';
    arr.forEach((e) => {
        str += e;
    });
    return str;
}

function calculateStrength(){
    let upper = uppercaseCheck.checked;
    let lower = lowercaseCheck.checked;
    let symbol = symbolCheck.checked;
    let number = numbersCheck.checked;

    if(upper && lower && symbol && number && password.length>=8){
        setIndicator('green');
    }else if((upper || lower) && (number || symbol) && password.length >= 6){
        setIndicator('yellow');
    }else{
        setIndicator('red');
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText='Copied';
    }catch(e){
        copyMsg.innerText='Failed!';
    }
    copyMsg.classList.add('active');
    setTimeout(()=>{
        copyMsg.classList.remove('active');
    }, 1000);
}

inputSlider.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

generateBtn.addEventListener('click', ()=>{
    let funs = [];

    //Get checked items
    if(uppercaseCheck.checked){
        funs.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funs.push(generateLowerCase);
    }
    if(numbersCheck.checked){
        funs.push(generateRandomNumber);
    }
    if(symbolCheck.checked){
        funs.push(generateRandomSymbol);
    }

    //If try to get less length password than password type
    if(funs.length > passwordLength){
        passwordLength =funs.length;
        handleSlider(passwordLength);
    }
    password='';
    let funsLength = funs.length;

    //Compulsory
    for(let i=0; i<funsLength; i++){
        let ch = funs[i]();
        password = password + ch;
    }

    //Additional
    for(let i = 0; i<passwordLength-funsLength; i++){
        let ch = funs[getRandomInteger(0,funsLength)]();
        password = password + ch;
    }

    //Shuffle password
    password = shufflePassword(Array.from(password));

    //Display Password
    passwordDisplay.value = password;

    //Strength 
    calculateStrength();
})