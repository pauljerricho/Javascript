// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// 삭제버튼을 누르면 할일이 삭제된다.
// 체크버튼을 누르는 순간 밑즐을 그은다.
// 1. 체크 버튼을 누르는 순간 true - > false
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. 다시 체크 버튼을 누르면 false - > false

// 진행 중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝난 탭은, 끝난 아이템만, 진행 중 탭은 진행 중인 것만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div"); // 모두 가져올 때는 querySelectorAll
let taskList = [];
let filterList = [];
let mode = "all";
addButton.addEventListener("click",addTask); // script는 맨 아래에 넣자

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event) {filter(event)})
}
console.log(tabs)
function addTask(){
    // console.log("clicked"); //log로 항상 확인하자
    let task = {
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    };
    taskList.push(task)
    console.log(taskList)
    render(); // 실행하려면...
}

function render() {
    let list = [];
    if(mode == "all"){
        list = taskList
    }else if(mode == "ongoing" || mode == "done"){
        list = filterList
    }
    let resultHTML = "";
    for(let i = 0; i<list.length; i++){
        if(list[i].isComplete == true){
        resultHTML += `<div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">체크</button>
            <button onclick="deleteTask('${list[i].id}')">삭제</button>
        </div>
    </div>`
    }else{
        resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">체크</button>
            <button onclick="deleteTask('${list[i].id}')">삭제</button>
        </div>
    </div>`
    }
}
    document.getElementById("task-borad").innerHTML = resultHTML;
}

function toggleComplete(id){
    console.log("id : " , id);
    for(let i = 0; i<taskList.length; i++){
        if(taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete; //! 토글값을 설정할 때 많이 쓰임
            break;
        } 
    }
    render();
    console.log(taskList)
}

function deleteTask(id){
    console.log("delete", id)
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    console.log(taskList)
    render();
}

function filter(event){
    mode = event.target.id;
    console.log("filter",event.target.id);
    filterList = [];
    if(mode == "all"){
        render();
    }else if(mode == "ongoing"){
        for(let i = 0; i<taskList.length;i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }else if(mode == "done"){
        for(let i = 0; i<taskList.length;i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
    render();
    console.log(filterList)
}

function randomIDGenerate() {
    return '-' + Math.random().toString(36).substring(2,9)
} //정보들에는 ID가 필요하다.


