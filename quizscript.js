let questions =[
    {questions :' Pictorial representation of data using symbols is known as:', 
     options:['Bar graph', 'Pictograph', 'Pie chart', 'None of these'] , answer:0},
    {questions :' Pictorial representation of data using symbols is known as:', 
     options:['Car graph', 'Pictograph', 'Pie chart', 'None of these'] , answer:1},
    {questions :' Pictorial representation of data using symbols is known as:', 
     options:['Dar graph', 'Pictograph', 'Pie chart', 'None of these'] , answer:2},
    {questions :' Pictorial representation of data using symbols is known as:', 
     options:['Ear graph', 'Pictograph', 'Pie chart', 'None of these'] , answer:3}
];

let next= document.getElementById('next');
let buttoncontainer = document.querySelector('.buttoncontainer');
let questionText= document.querySelector('.container h2')
let container= document.querySelector('.container')
let index=0;
let correctAnswers=0;


let updateOptions =()=>{
    let question = questions[index];
    buttoncontainer.innerHTML='';
    // resetState();
    questionText.innerHTML=`${index+1} . ${question.questions}`;
    question.options.forEach((option,i)=>{
      let btn = document.createElement('button');
      btn.innerHTML=`${option}`;

       if(i== question.answer){
            btn.dataset.correct= "true";
        }
      btn.addEventListener('click',(e)=>{
                console.log("clicked button", e.target.innerHTML)
              if(e.target.dataset.correct){
                correctAnswers +=1;
                btn.classList.add('correct');
               }else{
                btn.classList.add('incorrect');
               }
               disbaleAll();
            });

            buttoncontainer.appendChild(btn);
    })
    container.style.display="block";
     next.style.display="block";
}

let disbaleAll=()=>{
    console.log("calll", typeof buttoncontainer.children);  
    Array.from(buttoncontainer.children).forEach(btn=>{
        if(btn.dataset.correct){
            btn.classList.add('correct');  // there might be chances from above wrong is choosen so show correct one
        }
      btn.disabled= true;
    })
}

next.addEventListener('click',()=>{

    if(index<3){
        index += 1;
        updateOptions();
    }else{
        index=-1;
        document.querySelector('h1').innerHTML=`Quiz ends here , your score ${correctAnswers}`;
        correctAnswers=0;
        container.style.display='none';
        next.innerHTML='Start Again';
    }
})

let startQuiz=()=>{
     index=0;
     container.style.display='block';
     next.innerHTML='next';
     correctAnswers=0;
     updateOptions();
 }

startQuiz();