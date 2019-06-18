const pregunta = document.querySelector('.pregunta');
const respuestas = document.querySelector('.respuestas');

let = 

console.log(respuestas);

class Question{
  constructor(q, a){
    this.question = q;
    this.answer = a;
  }
  guess(res){
    return res === this.answer;
  }
}

class Quiz{
  questions = [];
  score = 0;|
  start(){
    this.questions.push(new Question('Quien soy yo?', 'Pues yo'));
  }
  next(){
    const nextQuestion = this.questions.pop();
    return nextQuestion;
  }
}

const quiz = new Quiz();
quiz.start();
question = quiz.next();
console.log(question);
if(question.guess("Pues yo")){
  quiz.score++;
}
console.log(quiz.score);
