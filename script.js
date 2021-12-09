showtasks()
shownotes()
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
    addtext=document.getElementById("addinput").value
    tasks=localStorage.getItem("taskslist")
    if (tasks==null) {
        tasksarr=[];
    }
    else{
        tasksarr=JSON.parse(tasks)
    }
    
    tasksObj={
        id:Date.now(),
        name:addtext,
        subtasks:[]
    }

    tasksarr.push(tasksObj)
    localStorage.setItem("taskslist",JSON.stringify(tasksarr));
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup").style.display="none"
    showtasks()
    shownotes()
}
function showtasks(){
    tasks=localStorage.getItem("taskslist")
    if(tasks==null){
        tasksarr=[];
    }
    else{
        tasksarr=JSON.parse(tasks)
    }
    let html="";
    tasksarr.forEach(function(element,index){
        html+=`
        <div class="card" >
        <div  onclick="showcard(${element.id})">${element.name}<br><hr></div>
        <div id="${element.id}"  class="notescard"></div>
        <div class="aicons">
        <div>
        <img src="./images/add.png" alt="" class="deleteicon" onclick="addlists(${element.id})" >
        </div>
        <div> 
        <img src="./images/delete.png" alt="" class="deleteicon" onclick="deletetask(${index})">
        </div>
        </div>
        </div>
        `
    });
    let taskelm=document.getElementById("container")
    if (tasksarr.length==0) {
        taskelm.innerHTML=`<h2>No Notes</h2>`
    }
    else{
        taskelm.innerHTML=html
    }
}
function deletetask(index){
    tasks=localStorage.getItem("taskslist")
    if(tasks==null){
        tasksarr=[];
    }
    else{
        tasksarr=JSON.parse(tasks)
    }
    tasksarr.splice(index,1)
    localStorage.setItem("taskslist",JSON.stringify(tasksarr))
    showtasks();
    shownotes();
}
let newid;
function addlists(id){
    newid=id
    document.getElementById("parent").style.filter="blur(7px)"
    document.getElementById("popup2").style.display="flex" 
}
function remove1(){
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup2").style.display="none"
}
function addnotes(){
    let ids=newid
    note=document.getElementById("notelist").value
    tasks=localStorage.getItem("taskslist")
    if(tasks==null){
        tasksarr=[];
    }
    else{
        tasksarr=JSON.parse(tasks)
    }
    tasksarr.forEach(function(element,index) {
        if (element.id==ids) {
            tasksarr[index].subtasks.push(note)
            localStorage.setItem("taskslist",JSON.stringify(tasksarr))
        }
    });
    document.getElementById("parent").style.filter="blur(0px)"
    document.getElementById("popup2").style.display="none"
    shownotes();
}
function shownotes(){
    tasks=localStorage.getItem("taskslist")
    if (tasks==null) {
        tasksarr=[];
    }
    else{
        tasksarr=JSON.parse(tasks)
    }    
    tasksarr.forEach((element,index) => {
        let html3="";
        let noteslm=document.getElementById(element.id)
        tasksarr[index].subtasks.forEach((element,index) => {
            html3+=`
            <div id="${element}" onclick="strike(this.id)" >${element}<button class="markbtn">Mark Done</button></div>
            `
        });
        noteslm.innerHTML=html3
    });
}
function strike(index1){
    let val=index1
    tasks=localStorage.getItem("taskslist")
    tasksarr=JSON.parse(tasks)
    tasksarr.forEach((element,index) => {
        tasksarr[index].subtasks.forEach((element,index) => {
          if (val==element) {
            document.getElementById(element).innerHTML="<del id='dl'></del>"
            document.getElementById("dl").innerText=val
          }
        });
    });
    
}
function showcard(cardindex){
    tasksarr.forEach(function(element,index){
       if ( tasksarr[index].id==cardindex) {
        document.getElementById("cardop").innerHTML=` <div id="cardh" >${element.name}<br><hr></div>
        <div id="${element.id}" class="notescard"></div>
        <div>
          <div class="aicons">
            <div>
            <img src="./images/add.png" alt="" class="deleteicon" onclick="addlists(${element.id})" >
            </div>
            <div> 
            <img src="./images/delete.png" alt="" class="deleteicon" onclick="deletetask(${index})">
            </div>
          </div>
        </div>
      </div>`
       }
    })
    document.getElementById("nav2").style.display="flex"
    document.getElementById("cardop").style.display="flex"
    document.getElementById("navshow").style.display="none"
    document.getElementById("container").style.display="none"
    shownotes();
}
function backhandle(){
    document.getElementById("nav2").style.display="none"
    document.getElementById("cardop").style.display="none"
    document.getElementById("navshow").style.display="flex"
    document.getElementById("container").style.display="flex"
window.location.reload()
}
