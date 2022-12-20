let flexButton=document.getElementById("flex-function");
let flexBox=document.getElementById("flex-box")
flexButton.addEventListener("click",function(){
    flexBox.style.flexDirection="column";
})


const selectValue=(e) =>{
    document.getElementById("demo").innerHTML=document.getElementById("slct_id").value
}