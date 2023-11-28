Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");


Webcam.attach('#camera');

function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'">';
    });
}

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/G8nlSW6yg/model.json",modelloaded);
function modelloaded(){
    console.log("modelisloaded");

}
function check(){
    img=document.getElementById("captureimage");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("objectaccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}