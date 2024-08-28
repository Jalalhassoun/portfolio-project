const termBtn=document.querySelector("input#terms");
const submitBtn=document.querySelector("#submit");
termBtn.addEventListener("change",function(e){
  if(e.target.checked===true){
    submitBtn.setAttribute("disabled",false);
  }
    else{
      submitBtn.setAttribute("disabled",true);

    }
  
});