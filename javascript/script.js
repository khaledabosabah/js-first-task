let newTask = document.getElementById('newTask');
let addBtn = document.getElementById('addBtn');
let noTask = document.getElementById('noTask');
let allTask = document.getElementById('allTask');
let count = document.getElementById('count');







// no task div

function showDiv(){
     if(allTask.childElementCount == 0){
        noTask.classList.remove('none');
     }
     else{
        noTask.classList.add('none');
     }
}



// add task

let getData = ()=>{

let data =newTask.value ;
let newData=data.trim();

if(  data=='' )
    { alert( 'Please enter valid task');
}
else if( newData == ''     ){
    alert( 'Please enter valid task');
}
else if ( newData.length <3){
    alert( 'Please enter valid task');

}
else if ( newData.length >50){
    alert( 'Please enter shorter task');

}

else{
    allTask.innerHTML += ` <div class="alert alert-primary" >    ${data}  <button class=" delete btn btn-danger float-end" style="margin-top:-7px;"> delete</button>  </div>    `;
    count.innerText = allTask.childElementCount ;
    showDiv();
    newTask.value= '';

}





}
addBtn.addEventListener ('click' , getData   );



// delete task


document.addEventListener('click' , (event)=>{

    if(  event.target.classList.contains('delete')){
        if(confirm('Did u finish the task ?')){
        event.target.parentElement.remove();
        count.innerText = allTask.childElementCount ;
        showDiv();

    } }

}   );


