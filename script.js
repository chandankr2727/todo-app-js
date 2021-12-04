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
        <div class="card" id="${index+"a"}">
        <div >${element}</div>
        <div id="addlists" class="notescard"></div>
        <div class="aicons">
        <div>
        <img src="./images/add.png" alt="" class="deleteicon" onclick="addlists()" >
        </div>
        <div> 
        <img src="./images/delete.png" alt="" class="deleteicon" id="${index}" onclick="deletetask(this.id)">
        </div>
        </div>
        </div>
        `
        html2+=`<div id="popup2" class="pop">
        <div class="text">Add New List</div>
        <img src="./images/remove.png" alt="" id="removeicon2" class="removeicons">
        <input type="text" id="addinput2" class="inputtext"> <br>
        <button id="addbtn2" class="addbttn">Add</button>
        </div>`
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
    console.log();
    tasks=localStorage.getItem("tasks")
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
document.getElementById("removeicon2").addEventListener("click",remove1)
function remove1(){
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup2").style.display="none"
}
document.getElementById("addbtn2").addEventListener("click",addnotes)
function addnotes(){
    addnote=document.getElementById("addinput2")
    notes=localStorage.getItem("notes")
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(addnote.value);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    shownotes();
}
function shownotes(){
    notes=localStorage.getItem("notes")
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
            <div class="list" id="${index}">${element}</div>
        `
    });
    let noteslm=document.getElementById("addlists")
    if (notesObj.length==0) {
        noteslm.innerHTML=`<h2>nothing</h2>`
    }
    else{
        noteslm.innerHTML=html
    }
    function addnotes(){
    addnote=document.getElementById("addinput2")
    notes=localStorage.getItem("notes")
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(addnote.value);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    shownotes();
}
}