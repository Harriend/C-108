function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BekTqMVAa/model.json' , modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    random_r = Math.floor(Math.random()*255) + 1;
    random_g = Math.floor(Math.random()*255) + 1;
    random_b = Math.floor(Math.random()*255) + 1;

    document.getElementById("sound").innerHTML = "I Can Hear - " + results[0].label;
    document.getElementById("accuracy").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("sound").style.color = "rgb(" + random_r + " , " + random_g + " , " + random_b + ")";
    document.getElementById("accuracy").style.color = "rgb(" + random_r + " , " + random_g + " , " + random_b + ")";

    img1 = document.getElementById("alien-1");
    img2 = document.getElementById("alien-2");
    img3 = document.getElementById("alien-3");
    img4 = document.getElementById("alien-4");

    if(results[0].label == "clapping"){
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }else if(results[0].label == "cube"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }else if(results[0].label == "metallic sound"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img4.src = "aliens-04.png";
    }else{
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";
    }

}
}