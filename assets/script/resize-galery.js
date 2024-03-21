window.addEventListener("load", (event)=>{
    let listTopic = document.getElementById("galery-contain").getElementsByClassName("topic");

    function resize(paramChildren){
        for(let i=0; i<paramChildren.length; i++){
            let currentElement = paramChildren[i];
            let currentFigure = currentElement.getElementsByTagName("figure")[0];
            let currentImg = currentElement.getElementsByTagName("img")[0];

            if(currentFigure.offsetHeight > currentImg.offsetHeight){
                currentImg.style.width = "auto";
                currentImg.style.height = "100%";
                currentImg.style.top = "0px";
                currentImg.style.left = ((currentFigure.offsetWidth - currentImg.offsetWidth)/2)+"px";
            }else{
                currentImg.style.width = "100%";
                currentImg.style.height = "auto";
                currentImg.style.left = "0px";
                currentImg.style.top = ((currentFigure.offsetHeight - currentImg.offsetHeight)/2)+"px";
            }
        }
    }

    resize(listTopic);

    window.onresize = () =>{
        resize(listTopic);
    }
});