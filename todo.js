const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// 할 일을 담는 배열 
let toDos = [];

function filterFn(toDo) {
    return toDo.id === 1
}

// 할 일 목록 삭제 
function deleteToDo(){
    // 타겟을 이용해 버튼을 찾음, 버튼의 부모를 찾아 삭제함 
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filterFn의 조건에 맞는 것들만 리턴 
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    // toDos를 필터거친 리스트로 변경 
    toDos = cleanToDos;
    // 저장 
    saveToDos();
}


// 오브젝트를 스트링 형태로 바꿔서 저장 
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 리스트+버튼을 투두리스트에 자식으로 추가함
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");    
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// json string으로 저장된 내용을 오브젝트로 불러옴 
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();