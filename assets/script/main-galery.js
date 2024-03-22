window.addEventListener("load", (event)=>{
    let galeryModal = document.getElementById("galery-modal");
    let close = document.getElementById("close");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let topics = document.getElementsByClassName("topic");

    function openModal(pElement){
        console.log(galeryModal);
        galeryModal.style.display="block";
    }

    function closeModal(){
        
    }

    function direction(pWay){

    }

    function addEvent(){
        // events for topic
        for(let i = 0; i < topics.length; i++){
            console.log(topics[i]);
            topics[i].addEventListener("click", function(pEvent){
                pEvent.preventDefault();
                openModal(topics[i]);
            });
        }
        // events for modal
        close.addEventListener("click", function(pEvent){
            pEvent.preventDefault();
            closeModal();
        })
        prev.addEventListener("click", function(pEvent){
            pEvent.preventDefault();
        })
        next.addEventListener("click", function(pEvent){
            pEvent.preventDefault();
        })
    }
    addEvent();
       
})