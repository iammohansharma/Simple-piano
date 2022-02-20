window.addEventListener("load", ()=>{
  const sounds = document.querySelectorAll(".sound");
  const btns  = document.querySelectorAll(".btn");

 btns.forEach((btn,index) => {
    btn.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
  

});
