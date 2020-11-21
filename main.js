var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition;

function talk(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak(){
    var apikey=window.speechSynthesis
    var speakData=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speakData);
    apikey.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
jpeg_quality: 90
});
var camera=document.getElementById("div1")