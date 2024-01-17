nose_x=0;
nose_y=0;
objects=[];

function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.hide();
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);   
}
function draw()
{
    image(video,0,0,550,550);
    noFill();
    stroke("yellow");
    rect(nose_x-100,nose_y-90,200,200)
    text("Human",nose_x-100,nose_y-90);
    textSize(22);
        rect(nose_x-100,nose_y-90,200,200)


}
function modelloaded()
{
    console.log("model loaded!");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x is: "+nose_x+" nose y is: "+nose_y)
        
        
    }
}