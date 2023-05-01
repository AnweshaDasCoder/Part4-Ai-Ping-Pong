//noseX=0;
//noseY=0;
difference = 0;
rightWristX = 0;
rightWristY = 0;
//leftWristX = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
  MarioAnimation();
  img = loadImage('ping.png');
}

function setup() {
 instializeInSetup(ping);
 canvas.parent('canvas');
 poseNet.on('pose', gotPoses);
 poseNet=ml5.poseNet(video, modelLoaded);
}

function draw(){
  video=createCapture(VIDEO);
  video.size(600, 400);
  if(rightWrist > 0.2) {
    fill('#0000ff');
  stroke('#F90093');
  circle(rightWristX, rightWristY, 20);
  }
}

function gotPoses(results) {
  if(results.length>0) {
console.log(results);
//leftWristX = results[0].pose.leftWrist.x;
//leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
//console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
  }
}

function ModelLoaded() 
{
  console.log("Model is loaded");
}