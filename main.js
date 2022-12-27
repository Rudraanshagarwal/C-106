function start_classification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/e_m6FjscC/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResult)
};

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        random_number_r=Math.floor(Math.random()*255);
        random_number_g=Math.floor(Math.random()*255);
        random_number_b=Math.floor(Math.random()*255);
        document.getElementById("Noise").innerHTML=result[0].label
        document.getElementById("Accuracy").innerHTML=(result[0].confidence*100).toFixed(2)+"%"; 
        img1=document.getElementById("img1");
        img2=document.getElementById("img2");
        img3=document.getElementById("img3");
        img4=document.getElementById("img4");
        if(result[0].label=="Clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
       else if(result[0].label=="Snap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(result[0].label=="Tap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }

}
}
  

