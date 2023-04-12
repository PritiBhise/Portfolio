console.log("priti");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{

    document.querySelector('.side').classList.toggle('sidebarGo');
    if(document.querySelector('side').classList.contains('sidebarGo'))
    {
       document.querySelector('.ham').style.display='inline'
       document.querySelector('.cross').style.display='none'

    }
    else
    {
        document.querySelector('.cross').style.display='inline'
        setInterval(() =>{
        document.querySelector('.ham').style.display='none'
        },360);
    }

})




