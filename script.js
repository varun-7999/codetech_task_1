const itemArray= localStorage.getItem("items") ?  JSON.parse(localStorage.getItem("items")): []
console.log(itemArray);
document.querySelector("#button").addEventListener("click" , ()=>{
    items=document.querySelector("#item")
    console.log("yeah i got your btn ")
    createitem(items);
})
function createitem(items){
    itemArray.push(items.value);
    localStorage.setItem("items", JSON.stringify(itemArray));
    location.reload()
}
function displayItems(){
   let items="";
    for (let i=0; i< itemArray.length;i++ ){
        if (itemArray[i] !== undefined) {
            items+=`<div class="item">
            <div class="item-controller">
                <textarea disabled >${itemArray[i]}</textarea>
                <i class="fa-solid fa-check deletebtn"></i>
                <i class="fa-solid fa-pen-to-square editbtn"></i>
                </div>
                <div class="update-controller">
                <button id="save">save</button>
                <button id="cancel">cancel</button>
                </div>
            </div>`}
            console.log("hello ")
            document.querySelector(".to-do").innerHTML= items
}}
function deletebutton(){
  let deletebtn=document.querySelectorAll(".deletebtn");
  deletebtn.forEach((db,i) => {
    db.addEventListener("click",()=>{
        deleteitem(i)
    })
  })
}
function deleteitem(i){
itemArray.splice(i,1);
localStorage.setItem("items",JSON.stringify(itemArray))
location.reload()
}
function editbutton(){
    let editbtn=document.querySelectorAll(".editbtn");
    let updatecontroller= document.querySelectorAll(".update-controller")
    let textarea= document.querySelectorAll(".item-controller textarea ")
    editbtn.forEach((eb,i) =>{
        eb.addEventListener("click",()=>{
        textarea[i].dataset.originalValue = textarea[i].value;
        updatecontroller[i].style.display="block"
        textarea[i].disabled = false
    })
    })
}
function savebutton(){
    let savebtn= document.querySelectorAll("#save")
    let input= document.querySelectorAll(".item-controller textarea")
    savebtn.forEach((sb,i)=>{
        sb.addEventListener("click", ()=>{
            updateitem(input[i].value,i)
        })
    })
}
function updateitem(text,i){
    itemArray[i]= text;
    localStorage.setItem("items",JSON.stringify(itemArray))
    location.reload();
}
function cancelbtn(){
    let cancel = document.querySelectorAll("#cancel")
    const updatecontroller= document.querySelectorAll(".update-controller")
    const textarea= document.querySelectorAll(".item-controller textarea ")
    cancel.forEach((cb,i)=>{
        cb.addEventListener("click",()=>{
            textarea[i].value = textarea[i].dataset.originalValue;
            updatecontroller[i].style.display="noe"
            textarea[i].disabled=true
        })
    })
}
function displaydate(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML= date[1]+ " " + date[2] + " "+date[3];
}

window.onload= function(){
    displaydate();
    displayItems()
    deletebutton()
    editbutton()
    savebutton()
    cancelbtn()
}
