let screen=document.getElementById("screen");
let screenValue="";

buttons=document.querySelectorAll("button");
for(b of buttons){
    b.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
       
        if(buttonText=="X"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        if(buttonText=="< <"){
            buttonText="<<";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            screenValue=eval(screenValue);
            screen.value=screenValue;
        }    
        else if(buttonText=="x"){
            screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}