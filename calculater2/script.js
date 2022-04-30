let screen=document.getElementById('screen');
let screenValue='';
buttons=document.querySelectorAll('button');
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('fuhhj'+buttonText)
        if(buttonText=='x')
        {
            buttonText='*';
            screen.value=buttonText;

        }
        else if(buttonText=='='){
            
        }
    })
}

