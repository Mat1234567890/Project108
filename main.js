//https://teachablemachine.withgoogle.com/models/0GLqaV043/
function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0GLqaV043/model.json', modelReady);
}  
function modelReady(){
classifier.classify(gotresults);
}
function gotresults(error,results){
if (error){
console.error(error);
}
else{
console.log(results);
random_r = Math.floor(Math.random()* 255) + 1;
random_g = Math.floor(Math.random()* 255) + 1;
random_b = Math.floor(Math.random()* 255) + 1;

document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
document.getElementById("result_accuracy").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
document.getElementById("result_label").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")";
document.getElementById("result_accuracy").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")";

img = document.getElementById("MainImg");

if (results[0].label == "Tiger"){
img.src = "tiger-roar.gif";
}
else if (results[0].label == "Bear"){
img.src = "angry-bear.gif";
}
else if (results[0].label == "Dog"){
    img.src = "scary dog.gif";
    }
else{
    img.src = "earicon.png";
}

}
}