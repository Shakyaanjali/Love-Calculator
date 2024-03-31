

let result = document.querySelector("#result");

let btn = document.querySelector("#btn");

let a = btn.addEventListener("click", ()=>{
 
    let randomNumber = parseInt(Math.random()*100);
    console.log(randomNumber);

    let yourName = document.querySelector("#your-name").value;

    let patnerName = document.querySelector("#patner-name").value;

    if(yourName === ''){
        alert("Please enter Your Name !")
    }
    else if(patnerName === ''){
        alert("Please enter patner's Name !")
      
    }
    else{
        result.innerHTML = yourName  + " and " +patnerName +
        " love Percentage is: "+randomNumber + "%";
    }
   
})

