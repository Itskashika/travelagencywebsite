document.getElementById("book").addEventListener("click",function(event){
    event.preventDefault();
    alert("Booking Confirm ! Our Travel Expert will connect you.");
});


Array.from(document.getElementsByTagName("input")).forEach((e,i) =>{
    e.addEventListener("keyup",(el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName("bi-caret-down-fill")[i].style.transform="rotate(180deg)";
        } else {
            document.getElementsByClassName("bi-caret-down-fill")[i].style.transform="rotate(0deg)";   
        }
    })
});


document.getElementById("inputsub").addEventListener("submit",function(event){
    event.preventDefault();
    alert("Thank You for Subscribing!");
});
