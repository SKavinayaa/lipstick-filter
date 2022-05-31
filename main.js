lipX = 0;
lipY = 0;
function preload()
{
    lipstick_lip = loadImage('https://i.postimg.cc/vT4Xh4w5/2-26681-lips-png-transparent-image-lips-png.jpg')
}

function  setup()
    {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose',gotPoses);
    }

 
    function gotPoses(results)
    {
if(results.length>0)
{
console.log('results');
lipX = results[0].pose.nose.x-15;
lipY = results[0].pose.nose.y-15
console.log("lip x =" + lipX);
console.log("lip y =" + lipY);
}
    }


function modelLoaded()
{
console.log('poseNet is intialized');

}

function draw()
{
image(video,0,0,300,300);
circle(lipX , lipY , 30);
fill(255, 0 , 0);
stroke(255, 0 ,0);
image(lipstick_lip,lipX,lipY,30,30);

}

function take_snapshot()
{
 save('myFilter.png');
}