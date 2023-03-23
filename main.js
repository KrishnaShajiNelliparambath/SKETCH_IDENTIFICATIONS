function preload(){
classifier=ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis
}

function draw(){
strokeWeight(13)
stroke(0)
if (mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY)
} 
}

function classifycanvas(){
    classifier.classify(canvas,gotresult)
}

function gotresult(error,result){
if(error){
    console.error(error)
} 
console.log(results)   
document.getElementById("imgname").innerHTML=result[0].label;
document.getElementById("imgpersent").innerHTML=Math.round(result[0].confidence*100)+"%";

Utterthis=new SpeechSynthesisUtterance(result[0].label);
synth.speak(Utterthis)
}

function clearcanvas(){
    background("white")
}