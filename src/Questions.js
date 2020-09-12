
import './styles.css';
let main = document.querySelector('main');
document.querySelector('.btn').addEventListener('click',function(event){
  let answer = main.lastElementChild;
  let rowUp = event.currentTarget.firstElementChild;
  let rowDown = event.currentTarget.lastElementChild;
  console.log(event.currentTarget)
  if(answer.classList.contains('answer-show') && rowUp.classList.contains('rowUp-hidden') && rowDown.classList.contains('rowDown')){
    answer.classList.remove('answer-show');
    rowUp.classList.remove('rowUp-hidden');
    rowDown.classList.remove('rowDown');
  }
  else{
    answer.classList.add('answer-show');
    rowUp.classList.add('rowUp-hidden');
    rowDown.classList.add('rowDown');

  }

},false);

/*  event.target.style.display = "none";
  document.querySelector('.rowDown').style.display = "block";*/
