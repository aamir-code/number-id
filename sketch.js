var x;
var inp;
var button;

function setup() {
    createCanvas(400,400);

 inp = createInput("");
 inp.position(200,150);
 button = createButton("Ok"); 
 button.position(375,150);
 button.mousePressed(rectifyNo);

}
function draw() {
    background(rgb(4656,78787));
    
}
function rectifyNo(){
    x = inp.value();

    if(x % 2===0) {

        text("even No.",200,200);
    }else{
        text("odd No.",200,200);
    }

}