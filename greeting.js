const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

// CSS와 연동하여 보이고 안보이고를 설정하기 위한 변수임 
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

// 현재 유저 네임 저장 
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

// submit = 유저 네임 입력 후 엔터
// submit 할 때 마다 입력한 유저 이름값을 저장한다.
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 폼을 보이도록 변경, submit에 유저값 받는 리스너 등록
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// 입력폼을 안보이도록 변경, 인사말을 보이도록 변경
// 인사말 텍스트를 입력한 유저값으로 변경  
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// 로컬 스토리지에 저장된 유저값을 불러옴 
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
    askForName();
}

init();