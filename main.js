noseX = 0
noseY = 0
function preload(){ 
    moustache_img = loadImage("https://i.postimg.cc/FR48ZrxK/moustache-PNG37-1.png")
}

function setup(){
    canvas  = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x - 25;
    noseY = results[0].pose.nose.y;
    console.log("nose x =" + noseX)
    console.log("nose y =" + noseY)
}
}

function draw(){
    image(video, 0,0,300,300);
    image(moustache_img,noseX,noseY,50,30)
    
}

function take_snapshot(){
    save('downloaded_picture.png')
}