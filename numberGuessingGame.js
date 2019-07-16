var answerNumber = Math.floor(Math.random() * 100) + 1;
var guessHistory = document.querySelector('.guessHistory') ;//querySelector 써서 클래스 앞에는 점 붙이기
var yesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highOrLow');
var guessButton = document.querySelector('.guessButton');
var guessForm = document.querySelector('.guessForm');
var guessCount = 0;



//Button 클릭을하면, checkYourNumber함수를 실행시켜라.
guessButton.addEventListener('click', checkYourNumber);


//errormassage창 띄우기
function errorMsg() {        
    yesOrNo.textContent = "1과 100 사이의 숫자를 입력해주세요";
    yesOrNo.style.backgroundColor = 'red'; 
}


//checkYoutNumber함수
function checkYourNumber(){
   

    if (guessCount === 0) {
        guessHistory.textContent = '입력한 숫자들 : ';

    } 

    var userGuess = Number(guessForm.value);

    if (userGuess === answerNumber){
        guessHistory.textContent += userGuess + ' '; // 숫자들 사이에 공백 넣어주기
        yesOrNo.textContent = "축하해요 정답이에요!";
        yesOrNo.style.backgroundColor = 'green';
        highOrLow.textContent = '';
        setGameOver(); 
    }
    else{
        if(isNaN(guessForm.value) === false){
    
    
            if(userGuess >= 1 && userGuess <= 100 ){
                guessCount++; //추가
                guessHistory.textContent += userGuess + ' '; // 숫자들 사이에 공백 넣어주기
                yesOrNo.textContent = "틀렸습니다!";
                yesOrNo.style.backgroundColor = 'red';
                
            
                if (userGuess < answerNumber) {
                    highOrLow.textContent = '정답은 더 큽니다!';
                }else if (userGuess > answerNumber){
                    highOrLow.textContent = '정답은 더 작습니다!';
                }
            }
            else{
                errorMsg();
            }
        }else {
            errorMsg();
        } 

        if (guessCount === 10 ) {
            yesOrNo.textContent = '!!!게임오버!!!';
            highOrLow.textContent = '';
            setGameOver();  
        }
    

    }
    
    guessForm.value = '';
}






var restartButton;

//게임이 끝난 경우 호출되는 함수
function setGameOver(){
    guessForm.disabled = true; //비활성화시키기.
    guessButton.disabled = true;
    restartButton  = document.createElement('button');
    restartButton.textContent = ' 새 게임 시작하기';

    //body의 자식요소로서 restartButton을 추가합니다.
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}


//게임 재시작 함수
function restartGame() {

    guessCount = 0;
    var resetParas = document.querySelectorAll('.resultDiv p'); //html 어떤 div태그 안에 들어가있는 모든 p요소
    for (var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = ' ';
        
    }

    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled = false;
    guessButton.disabled = false;
    guessForm.value = '';
    guessForm.focus();
    yesOrNo.style.backgroundColor = 'white';
    answerNumber = Math.floor(Math.random()*100) + 1;
}