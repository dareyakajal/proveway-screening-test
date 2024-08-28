const boxClose = document.querySelectorAll('.boxClose');
const boxOpen = document.querySelectorAll('.boxOpen');

for (let i = 0; i < boxClose.length; i++) {
  boxClose[i].addEventListener("click", function() {
    for (let i = 0; i < boxClose.length; i++){
      if(boxOpen[i].classList.contains('open')){
        boxOpen[i].classList.remove('open');
        boxClose[i].classList.toggle('close');
      }
    }
    boxOpen[i].classList.add('open');
    boxClose[i].classList.add('close');
  });
}