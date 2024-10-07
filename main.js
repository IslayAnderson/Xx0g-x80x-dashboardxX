//variables
const interface = document.getElementById('interface');
const bgPlane = document.querySelector('#background > .stage .child');

//eventlisteners
window.addEventListener('mousemove', (e)=>{
    const clamp = (val, min=0, max=10) => Math.min(Math.max(val, min), max)
    const width = window.innerWidth;
    const height = window.innerHeight;
    const centre = [width/2, height/2];
    let mouseXp = 0;
    let mouseYp = 0;
    switch(true){
        case e.pageX < centre[0] && e.pageY < centre[1]: 
            //north west
            mouseXp = clamp((width/e.pageY)/6);
            mouseYp = clamp((height/e.pageX)/9);
            bgPlane.style.transform = "rotateX("+mouseXp+"deg) rotateY(-"+mouseYp+"deg)"
            break;
        case e.pageX > centre[0] && e.pageY < centre[1]: 
            //north east
            mouseXp = clamp((width/e.pageY)/6);
            mouseYp = clamp((e.pageX/height)*9.5);
            bgPlane.style.transform = "rotateX("+mouseXp+"deg) rotateY("+mouseYp+"deg)"
            break;
        case e.pageX < centre[0] && e.pageY > centre[1]: 
            //south west
            mouseXp = clamp((e.pageY/width)*10);
            mouseYp = clamp((height/e.pageX)/9.5);
            bgPlane.style.transform = "rotateX(-"+mouseXp+"deg) rotateY(-"+mouseYp+"deg)"
            break;    
        case e.pageX > centre[0] && e.pageY > centre[1]: 
            //south east
            mouseXp = clamp((e.pageY/width)*10);
            mouseYp = clamp((e.pageX/height)*9.5);
            bgPlane.style.transform = "rotateX(-"+mouseXp+"deg) rotateY("+mouseYp+"deg)"
            break;    
    }
})