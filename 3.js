let str='';
let buttons= document.querySelectorAll('#bt');
Array.from(buttons).forEach((bt)=>{bt.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=')
    {
        str= eval(str);
        document.querySelector('input').value=str;
    }
    else if(e.target.innerHTML=='C')
    {
        str= '';
        document.querySelector('input').value=str;
    }
    else if(e.target.innerHTML=='%')
    {
        str= (eval(str))/100;
        document.querySelector('input').value=str;
    }
    else
    {
console.log(e.target)
str=str + e.target. innerHTML;
document.querySelector('input').value=str;
    }

})})