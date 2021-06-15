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