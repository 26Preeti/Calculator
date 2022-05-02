let screen=document.getElementById("screen");
let screenValue="";
var res=0;
buttons=document.querySelectorAll("button");
for(b of buttons){
    b.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        
     
        if(buttonText=="X" || buttonText=="+" || buttonText=="-"|| buttonText=="/"|| buttonText=="%"  || buttonText=="< <" || buttonText==">>" || buttonText=="&" || buttonText=="|" || buttonText=="^" ||buttonText=="~"){
            if(buttonText=="X"){
              buttonText="*";
            }
            if(buttonText=="< <"){
                buttonText="<<";
            }   
            if((/[0-9]*[+][0-9]*/).test(screenValue)){
              const a=screenValue.split("+");
              res=Number(a[0])+Number(a[1]);
              screenValue=res+buttonText;
              screen.value=screenValue;
            }
            else if((/[0-9]*[-][0-9]*/).test(screenValue)){
                const a=screenValue.split("-");
                res=Number(a[0])-Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
              }
            else if((/[0-9]*[/][0-9]*/).test(screenValue)){
                const a=screenValue.split("/");
                res=Number(a[0])/Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*[%][0-9]*/).test(screenValue)){
                const a=screenValue.split("%");
                res=Number(a[0])%Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*[*][0-9]*/).test(screenValue)){
                const a=screenValue.split("*");
                res=Number(a[0])*Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*['<<'][0-9]*/).test(screenValue)){
                const a=screenValue.split("<<");
                res=Number(a[0])<<Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*['>>'][0-9]*/).test(screenValue)){
                const a=screenValue.split(">>");
                res=Number(a[0])>>Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*['>>>'][0-9]*/).test(screenValue)){
                const a=screenValue.split(">>>");
                res=Number(a[0])>>>Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*['&'][0-9]*/).test(screenValue)){
                const a=screenValue.split("&");
                res=Number(a[0])&Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*['|'][0-9]*/).test(screenValue)){
                const a=screenValue.split("|");
                res=Number(a[0])|Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/[0-9]*['^'][0-9]*/).test(screenValue)){
                const a=screenValue.split("^");
                res=Number(a[0])^Number(a[1]);
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else if((/['~'][0-9]*/).test(screenValue)){
                
                res=~(Number(screenValue));
                screenValue=res+buttonText;
                screen.value=screenValue;
            }
            else{
            screenValue+=buttonText;
            screen.value=screenValue;
            }
        }
        else if(buttonText=="C"){
      
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            if((/[0-9]*[+][0-9]*/).test(screenValue)){
                const a=screenValue.split("+");
                res=Number(a[0])+Number(a[1]);
              }
              else if((/[0-9]*[-][0-9]*/).test(screenValue)){
                  const a=screenValue.split("-");
                  res=Number(a[0])-Number(a[1]);
                }
              else if((/[0-9]*[/][0-9]*/).test(screenValue)){
                  const a=screenValue.split("/");
                  res=Number(a[0])/Number(a[1]);

              }
              else if((/[0-9]*[%][0-9]*/).test(screenValue)){
                const a=screenValue.split("%");
                res=Number(a[0])%Number(a[1]);

            }
              else if((/[0-9]*[*][0-9]*/).test(screenValue)){
                  const a=screenValue.split("*");
                  res=Number(a[0])*Number(a[1]);
    
              }
              else if((/[0-9]*['<<'][0-9]*/).test(screenValue)){
                const a=screenValue.split("<<");
                res=Number(a[0])<<Number(a[1]);
                
            }
            else if((/[0-9]*['>>'][0-9]*/).test(screenValue)){
                const a=screenValue.split(">>");
                res=Number(a[0])>>Number(a[1]);
              
            }
            else if((/[0-9]*['>>>'][0-9]*/).test(screenValue)){
                const a=screenValue.split(">>>");
                res=Number(a[0])>>>Number(a[1]);
                
            }
            else if((/[0-9]*['&'][0-9]*/).test(screenValue)){
                const a=screenValue.split("&");
                res=Number(a[0])&Number(a[1]);
               
            }
            else if((/[0-9]*['|'][0-9]*/).test(screenValue)){
                const a=screenValue.split("|");
                res=Number(a[0])|Number(a[1]);
                
            }
            else if((/[0-9]*['^'][0-9]*/).test(screenValue)){
                const a=screenValue.split("^");
                res=Number(a[0])^Number(a[1]);
                
            }
            else if((/['~'][0-9]*/).test(screenValue)){
                let a=Number(screenValue[1]);
                res=(~a);
              
            }
            screenValue=res;
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