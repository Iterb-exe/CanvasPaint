const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const zydziu = document.querySelector("input[type='color']")
const ay = document.getElementById("aya")
canvas.height=window.innerHeight-4;
canvas.width=window.innerWidth;
addEventListener('resize',()=>{
    canvas.height=window.innerHeight-4;
    canvas.width=window.innerWidth;
});
const divek = document.querySelector(".ork")
document.getElementById("dl").addEventListener('click', dlCanvas, false);
divek.style.top="-87px"
function Roll(){
    if(divek.style.top=="-87px"){
        divek.style.top="0px"
    }
    else{
        divek.style.top="-87px"
    }
}
var mouse={
    x:canvas.height/2,
    y:canvas.width/2
}
function Relod(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
//---------------------------------------------------------------------//
let click = 0
canvas.addEventListener('mousedown',
    function MClick(event){
        
        ctx.lineWidth=ay.value;
        click++
        mouse.x = event.x;
        mouse.y = event.y;
        ctx.beginPath()
            ctx.fillStyle=zydziu.value;
            ctx.arc(event.x,event.y,ay.value/2,0,Math.PI*2,false)
            ctx.fill();
            ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(mouse.x,mouse.y)
        console.log(event)
        canvas.addEventListener('mousemove',
        function MMpve(event){
            if(click%2==1){
            ctx.strokeStyle=zydziu.value;
            ctx.lineTo(event.x,event.y);
            ctx.stroke();
            }
            
        })

    })
    canvas.addEventListener('mouseup',
    function MClickk(event){
        click++
        ctx.moveTo(mouse.x,mouse.y)
        ctx.closePath();
        ctx.beginPath()
            ctx.fillStyle=zydziu.value;
            ctx.arc(event.x,event.y,ay.value/2,0,Math.PI*2,false)
            ctx.fill();
            ctx.closePath();
    })
//---------------------------------------------------------------------//
canvas.addEventListener('keydown',
    function MKEY(event){
        console.log(event)
    })
//---------------------------------------------------------------------//
    function dlCanvas() {
        var dt = canvas.toDataURL('image/png');
        dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
        dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
        this.href = dt;
      };