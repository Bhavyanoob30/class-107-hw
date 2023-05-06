function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true}) ;
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jEZBI27sy/model.json', modelLoaded);
}

function modelLoaded(){
    console.log("modelLoaded") ;
}