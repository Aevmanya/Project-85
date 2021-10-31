canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car_x= 50; 
car_y= 50;
car_width= 90;
car_height= 150;
car_image= "car2.png";
background_image= "parkingLot.jpg";
function add(){
background_img_tag= new Image()
background_img_tag.onload= upload_background;
background_img_tag.src= background_image;
car_img_tag= new Image()
car_img_tag.onload= upload_car;
car_img_tag.src= car_image;
}
function upload_background(){
ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}
function upload_car(){
ctx.drawImage(car_img_tag, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_key_down);
function my_key_down(e){
keyPressed = e.keyCode;
if(keyPressed=='38'){
console.log("up");
Up();
}
if(keyPressed=='40'){
console.log("down");
Down();
}
if(keyPressed=='37'){
console.log("left");
Left();
}
if(keyPressed=='39'){
console.log("right");
Right();
}
}
function Up(){
if (car_y>=0){
car_y=car_y-10;
upload_background();
upload_car();
}
}
function Down(){
if (car_y<=450){
car_y=car_y+10;
upload_background();
upload_car();
}
}
function Left(){
if (car_x>=0){
car_x=car_x-10;
upload_background();
upload_car();
}
}
function Right(){
if (car_x<=650){
car_x=car_x+10;
upload_background();
upload_car();
}
}