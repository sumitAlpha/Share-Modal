const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//open Modal function
const openModal=()=>{
    console.log('Modal is open');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

};

//close Modal function
const closeModal=()=>{
    console.log('Modal is close');
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}