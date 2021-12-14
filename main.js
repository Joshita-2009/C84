canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_image="rover.png";
mars_image=["mars surface.jpg","mars 1.jpg", "mars2.jpg", "mars3.jpg"];
random_number=Math.floor(Math.random() * 4);
background_image=mars_image[random_number];
rover_x=10;
rover_y=10;

function add(){
back_img= new Image();
back_img.src=background_image;
back_img.onload=uploadbackground;
rov_img=new Image();
rov_img.src=rover_image;
rov_img.onload=uploadrover;
}
function uploadrover(){
    ctx.drawImage(rov_img, rover_x, rover_y, rover_width, rover_height);
}
function uploadbackground(){
    ctx.drawImage(back_img, 0,0, canvas.width, canvas.height);
}