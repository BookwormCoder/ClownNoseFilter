noseX=0;
noseY=0;
clownNose="";


function preload(){
clownNose=loadImage('https://i.postimg.cc/Z5HZJQ7R/Clown.png');
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO); //creating webcam livewiew and storing it in a variable "video"
     video.size(400,400);  //setting width and height to the webcam liveview
     video.hide(); //hiding the webcam so that we don't get 2 boxes because we want the camera to be on the canvas not seperately
     
     poseNet=ml5.poseNet(video, modelLoaded);  //starting the poseNet model passing the webcam liveview inside it and storing it in a variable called poseNet
     poseNet.on('pose', gotPoses);  //this line will run while the PoseNet is running
}

function draw(){
    image(video,0,0,400,400);  //placing the webcam on the canvas
    image(clownNose,noseX-20,noseY-20,45,45);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY,20);

}

function take_snapshot(){
    save('myFilterImage.png');  //saving whatever is there on canvas as a file as "myFilterImage.png" on your computer
}
//modelLoaded will run as soon as the PoseNet is Initialized and confirm that is has started
function modelLoaded(){
    console.log('PoseNet Is Initialized');  
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}


