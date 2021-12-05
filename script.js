showtasks()

document.getElementById("addlist").addEventListener("click",add)
function add(){
  document.getElementById("parent").style.filter="blur(7px)"
  document.getElementById("popup").style.display="flex"
}
document.getElementById("removeicon").addEventListener("click",remove)
function remove(){
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup").style.display="none"
}
document.getElementById("addbtn").addEventListener("click",addtask)
function addtask(){
    addtext=document.getElementById("addinput")
    tasks=localStorage.getItem("tasks")
    if(tasks==null){
        tasksObj=[];
    }
    else{
        tasksObj=JSON.parse(tasks)
    }
    tasksObj.push(addtext.value);
    localStorage.setItem("tasks",JSON.stringify(tasksObj))
    showtasks();
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup").style.display="none"
}
function showtasks(){
    tasks=localStorage.getItem("tasks")
    if(tasks==null){
        tasksObj=[];
    }
    else{
        tasksObj=JSON.parse(tasks)
    }
    let html="";
    let html2="";
    tasksObj.forEach(function(element,index){
        html+=`
        <div class="card" id="${index+"a"}" onclick="showcard(this.id)">
        <div >${element}<br><hr></div>
        <div id="addlists" class="notescard"></div>
        <div class="aicons">
        <div>
        <img src="./images/add.png" alt="" class="deleteicon" id="${'a'+index}" onclick="addlists(this.id)" >
        </div>
        <div> 
        <img src="./images/delete.png" alt="" class="deleteicon" id="${index}" onclick="deletetask(this.id)">
        </div>
        </div>
        </div>
        `
        html2+=`
    <div id="popup2" class="pop">
    <div class="text">Add New List</div>
    <img src="./images/remove.png" alt="" id="removeicon2" class="removeicons" onclick="remove1()">
    <input type="text" id="notelist" class="inputtext"> <br>
    <button  class="addbttn" id="${'a'+index}"" onclick="addnotes(this.id)" >Add</button>
    </div>
    `
       
    });
    let taskelm=document.getElementById("container")
    let poplm=document.getElementById("sep")
    if (tasksObj.length==0) {
        taskelm.innerHTML=`<h2>No Notes</h2>`
    }
    else{
        taskelm.innerHTML=html
        poplm.innerHTML=html2
    }
}
function deletetask(index){
    tasks=localStorage.getItem("tasks")
    console.log(index);
    if(tasks==null){
        tasksObj=[];
    }
    else{
        tasksObj=JSON.parse(tasks)
    }
    tasksObj.splice(index,1)
    localStorage.setItem("tasks",JSON.stringify(tasksObj))
    showtasks();
}
function addlists(){
    document.getElementById("parent").style.filter="blur(7px)"
    document.getElementById("popup2").style.display="flex" 
}
function remove1(){
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup2").style.display="none"
}
function addnotes(index){
    note=document.getElementById("notelist").value
    index=localStorage.getItem("index")
    if(index==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(index)
    }
    notesObj.push(note);
    localStorage.setItem("index",JSON.stringify(notesObj))

   
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup2").style.display="none"
    shownotes(index);
}
function shownotes(index2){
    notelist=document.getElementById(index2)
    index=localStorage.getItem("index")
    if (index==null) {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(index)
    }
    let html3="";
    notesObj.forEach(function(value,index){
        html3+=`
        <div id="${index}" onclick="strike(this.id)" >${value}<button class="markbtn">Mark Done</button></div>
        `
    })
    let noteslm=document.getElementById("addlists")
    if (notesObj.length==0) {
        noteslm.innerText="No task"
    }
    else{
        noteslm.innerHTML=html3
    }
}
function strike(index1){
    index=localStorage.getItem("index")
    if (index==null) {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(index)
    }
    let red=notesObj[index1]
    done=document.getElementById(index1)
    done.innerHTML="<del id='dl'></del>"
    document.getElementById("dl").innerText=red
}
function showcard(cardindex){

    let cd=document.getElementById(cardindex).innerHTML
    document.getElementById("cardop").innerHTML=cd

    document.getElementById("nav2").style.display="flex"
    document.getElementById("cardop").style.display="flex"
    document.getElementById("navshow").style.display="none"
    document.getElementById("container").style.display="none"
}
function backhandle(){
    document.getElementById("nav2").style.display="none"
    document.getElementById("cardop").style.display="none"
    document.getElementById("navshow").style.display="flex"
    document.getElementById("container").style.display="flex"
}
