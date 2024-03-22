window.addEventListener("load", (event)=>{
    let galeryModal = document.getElementById("galery-modal");
    let galeryNav = galeryModal.children[1];
    let galeryModalImg = document.getElementById("galery-modal-img");
    let close = document.getElementById("close");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let topics = document.getElementsByClassName("topic");
    let galeryIndex = 0;
    const _OPEN = "open";
    const _CLOSE = "close";
    const _PREV = "prev";
    const _NEXT = "next";

    function centerImg(){
        galeryModalImg.style.top = (window.innerHeight - galeryModalImg.height)/2 + "px";
        galeryModalImg.style.left = (window.innerWidth - galeryModalImg.width)/2 + "px";
        next.style.right = (window.innerWidth / 2) - (galeryModalImg.width / 2) - (window.innerWidth*0.05)+"px";
        prev.style.left = (window.innerWidth / 2) - (galeryModalImg.width / 2) - (window.innerWidth*0.05)+"px";
        next.style.top = (window.innerHeight - next.offsetHeight) / 2+"px";
        prev.style.top = (window.innerHeight - prev.offsetHeight) / 2+"px";
    }   

    function modalAction(pType){
        switch(pType){
            case _OPEN :
                // console.log("open");
                galeryModal.style.transition="all 0.5s ease-in-out 0s";
                galeryModalImg.style.transition="opacity 0.25s ease-in-out 0.5s";
                galeryModal.style.width="100vw";
                galeryModal.style.height="100vh";
                galeryModal.style.top=0;
                galeryModal.style.left=0;
                galeryModalImg.style.opacity=1;
                setTimeout(() => {galeryNav.style.visibility = "visible";}, 500);
                break;
            case _CLOSE :
                // console.log("close");
                galeryModal.style.transition="all 0.25s ease-in-out 0.25s";
                galeryModalImg.style.transition="opacity 0.25s ease-in-out 0s";
                galeryModal.style.width="0%";
                galeryModal.style.height="0%";
                galeryModal.style.top="50%";
                galeryModal.style.left="50%";
                galeryNav.style.visibility = "hidden";
                galeryModalImg.style.opacity = 0;
                setTimeout(() => {galeryModalImg.src="";}, 500);
                break;
            case _PREV :
                galeryModalImg.style.opacity = 1;
                break;
            case _NEXT :
                galeryModalImg.style.opacity = 1;
                break;
        }
    }  

    function indexPrevNext(pPrevNext){
        switch(pPrevNext){
            case _PREV:
                if(galeryIndex > 0){
                    galeryIndex--;
                }else{
                    galeryIndex = topics.length-1;
                }
                break;
            case _NEXT:
                if(galeryIndex >= (topics.length-1)){
                    galeryIndex=0;
                }else{
                    galeryIndex++;
                }
                break;
        }
    }

    function setElement(pIndexElement, pType){

        if(pType === _PREV || pType === _NEXT){
            console.log("next prev");
            galeryModalImg.style.transition="opacity 0.25s ease-in-out 0s";
            galeryModalImg.style.opacity = 0;
            indexPrevNext(pType);
            setTimeout(() => {
                galeryModalImg.src=topics[galeryIndex].children[0].children[0].src;
            }, 500);
        }else{
            galeryIndex = pIndexElement;
            galeryModalImg.src=topics[galeryIndex].children[0].children[0].src;
        }


        galeryModalImg.onload = function(){
            if(pType === _PREV || pType === _NEXT){
                setTimeout(() => {
                    centerImg();
                    modalAction(pType);
                }, 250);
            }else{
                centerImg();
                modalAction(pType);
            }
        }
    }

    function addEvent(){
        // events for topic
        for(let i = 0; i < topics.length; i++){
            topics[i].addEventListener("click", function(pEvent){
                pEvent.preventDefault();
                setElement(i,_OPEN);
            });
        }
        // events for modal
        close.addEventListener("click", function(pEvent){
            pEvent.preventDefault();
            modalAction(_CLOSE);
        })
        prev.addEventListener("click", function(pEvent){
            pEvent.preventDefault();
            setElement(galeryIndex, _PREV);
        })
        next.addEventListener("click", function(pEvent){
            pEvent.preventDefault();
            setElement(galeryIndex, _NEXT);
        })
    }
    addEvent();  
})
