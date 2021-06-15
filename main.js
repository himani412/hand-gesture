prediction="";
 Webcam.set({
     width:350,
     height:300,
     Imageformat:'png',
pngquality:90,
 });
 camera=document.getElementById("camera");
 Webcam.attach('#camera');
 function takesnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'"/>';

     });

 }
 console.log('ml5 version:',ml5.version);
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-YFiP38VA/model.json',modelLoaded);
 function modelLoaded(){
     console.log('ModelLoaded!');
 }
 function speak(){
    var synth=window.speechSynthesis;
    speakdata="The hand gesture prediction is "+prediction;
var utterThis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);  
}
function check(){
    img=document.getElementById('captureimage');
    classifier.classify(img, gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultgesturename").innerHTML=results[0].label;
        prediction=results[0].label;
        speak();
       if(results[0].label=="amazing"){
           document.getElementById("updategesture").innerHTML="&#128076;";
       }
       if(results[0].label=="thumbs up"){
           document.getElementById("updategesture").innerHTML="&#128077;";
       }
       if(results[0].label=="victory"){
           document.getElementById("updategesture").innerHTML="&#9996;";
       }
       if(results[0].label=="right"){
        document.getElementById("updategesture").innerHTML="&#128073;";
    }
    if(results[0].label=="clap"){
        document.getElementById("updategesture").innerHTML="&#128079;;";
    }
    }
}