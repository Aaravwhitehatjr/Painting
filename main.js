
canvas = document.getElementById("myFriend");
ctx= canvas.getContext("2d");

color = "black"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

{
color=document.getElementById("rang").value;
measure=document.getElementById("measure").value;
raid=document.getElementById("raid").value;
}

function my_mousedown (e)
{
current_position_of_mouse_x = e.clientX = canvas.offsetLoop;
current_position_of_mouse_y = e.clientY = canvas.offsetLoop;

if (MouseEvent== "mousedown")
{
console.log("Current position of X and Y coordinates");
console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle();
ctx.lineWidth=measure();
ctx.arc=(current_position_of_mouse_x,current_position_of_mouse_y,measure,0,2*Math.PI);
ctx.stroke();
}}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    MouseEvent = "mouseUP"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e)
{
    MouseEvent="mouseleave"
}

function clearArea (){
ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);

}


