let cl=document.querySelectorAll("#cl")
let cls=document.querySelectorAll(".cls")


for(let i=0;i<cls.length;i++)
{
    cl[i].onclick=function(){
        if(cls[i].style.display=="block"){
         cls[i].style.display="none";
        }
        else{
         cls[i].style.display="block";
        }
       
    }
}