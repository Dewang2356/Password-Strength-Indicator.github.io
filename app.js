let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

const status = document.getElementById("status");
val.addEventListener('input',()=>{
    a = val.value;
    if (val.value !== "") {
        lines.style.display="block";
    }
    else {
        lines.style.display="none";
        
    }
 weakPass(val);
 mediumPass(val);
  strongPass(val);
});
const weakPass = (val)=>{
    if (val.value.length > 3 && val.value.match(regExpWeak)) {
        status.innerText = "Your Password Is To Weak";
        status.style.color="#ff4757";
        weak.style.width = '100%';
         }
         else {
              weak.style.width = '0%';
         }
        
}
const mediumPass = (val)=>{
    if (val.value.length > 3 && val.value.match(regExpMedium) && val.value.match(regExpWeak)) {
        status.innerText = "Your Password Is Medium";
        status.style.color="orange";
        medium.style.width = '100%';
         }
         else {
              medium.style.width = '0%';
         }
        
}
const strongPass = (val)=>{
    if (val.value.length > 3 && val.value.match(regExpMedium) && val.value.match(regExpWeak) && val.value.match(regExpStrong)) {
        status.innerText = "Your Password Is Strong";
         status.style.color="#23ad5c";
        strong.style.width = '100%';
         }
         else {
              strong.style.width = '0%';
         }
        
}
eye.addEventListener('click',()=>{
    if (val.type==="password") {
        val.type = "text";
        eye.innerHTML = `<i class="fas fa-eye-slash"></i>`;
    }
    else {
        val.type = "password";
        eye.innerHTML = `<i class="fas fa-eye"></i>`;
    }
})