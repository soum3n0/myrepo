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
// const allCheckBox = document.querySelectorAll('input[type=checkbox]');

let password = '';
let passwordLength = 10;

const symbol = '+-/*[]{}()?<>:`~!-_=@#$%^&".,\|_';

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}
handleSlider();

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
        await navigate.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText='Copied';
    }catch(e){
        copyMsg.innerText='Failed!';
    }
    copyMsg.classList.add('active');
    setTimeout(()=>{
        copyMsg.classList.remove('active');
    }, 2000);
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
    if(funs.length > passwordLength){
        passwordLength =funs.length;
        handleSlider(passwordLength);
    }
    password='';
    for(let i = 0; i<passwordLength; i++){
        let ch = funs[getRandomInteger(0,funs.length)]();
        password = password + ch;
    }
    passwordDisplay.value = password;
    calculateStrength();
})