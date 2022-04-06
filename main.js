//https://teachablemachine.withgoogle.com/models/pvWnmYILO/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera")
Webcam.attach(camera)
function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="frame" src="'+data_uri+'"/>'
    })
}
console.log("ml5spaceversion", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pvWnmYILO/model.json', model_loaded)
function model_loaded() {
    console.log("model_is_loaded")
}
function Check() {
    img=document.getElementById("frame");
    classifier.classify(img,Got_Results) 
}
function Got_Results(error,results) {
    if(error){console.error(error);}
    else{
        console.log(results)
        var syn = window.speechSynthesis;
    var speakdata = results[0].label
    var utter = new SpeechSynthesisUtterance(speakdata)
    syn.speak(utter)
        document.getElementById("Accuracy").innerHTML="ACCURACY :"+results[0].confidence.toFixed(2);
        document.getElementById("Person").innerHTML="PERSON :"+results[0].label
    }
}