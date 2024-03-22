window.addEventListener("load", (event)=>{
    console.log("tata");

    let galeryModal = document.getElementById("galery-modal");
    let topics = document.getElementsByClassName("topic");

    function openModal(pElement){

    }

    function addClickTopics(){
        for(let i = 0; i < topics.length; i++){
            
        }
            topics.addEventListener("click", function(pEvent){
                console.log(pEvent);
            });
    }
    addClickTopics();
       
})