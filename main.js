moustacheX=0;
moustacheY=0;


function preload() {
    moustache_123= loadImage('https://i.postimg.cc/3x3QzSGq/m.png')

}

function setup() {
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        moustacheX=results[0].pose.nose.x-20;
        moustacheY=results[0].pose.nose.y-15;
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);

    }

}



function draw() {
    image(video, 0 ,0 ,300, 300);
    image(moustache_123, moustacheX, moustacheY, 50, 40);
}

function takeSnapshot() {
    save('myimage.png');
}