let head = document.querySelector("h5");
let btn = document.querySelector(".add");

let check = 0;

btn.addEventListener("click",function(){
    if(check == 0){

        head.innerHTML = "Friends";
        head.style.color = "green";
        btn.innerHTML = "Remove Friend";

        check = 1;
    }else{
        head.innerHTML = "Stranger";
        head.style.color = "red";
        btn.innerHTML = "Add Friend";

        check = 0;
    }
})

