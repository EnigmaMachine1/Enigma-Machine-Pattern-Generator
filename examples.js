'use scritct'

const url = 'https://serpapi.com/search.json?q=zentangle+pattern&tbm=isch&ijn=0'

async function getQuestions(){
    try{
        const response = await fetch(url);
        if(!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const data = await response.json();
        if(data.response_code === 0){
            processQuestions(data);
            showQuestion();
        }
        else{
            throw Error(`Error: Cannot get question from API`);
        }
    } catch(error) {
        console.log(error);
    }
}

function processQuestions(data) {
    for(let i=0; i<data.results.length; i++) {
        let question = {};
        question.text = data.results[i].question;
        question.level = data.results[i].difficulty;
        
        if(data.results[i].type === 'boolean') {
            question.answers = ['True', 'False'];
            question.correctAnswer = data.results[i].correct_answer === 'True' ? 0: 1;
        } else {
            question.answers = data.results[i].incorrect_answers;
            let index = Math.floor(Math.random() * 4);
            question.answers.splice(index, 0, data.results[i].correct_answer);
            question.correctAnswer = index;
        }
        questions.push(question);
    }
}