class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    Input.hide,
     buttons.hide, 
    titles.hide 

    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    myfirstQuiz
    textSize=(30)

    //call getContestantInfo( ) here
    getContestantInfo()

    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined) {
      fill ("blue")
      textSize(20)
      text("*note:Contestants who answered correct are highlighted in green colour !", 130,230) 
    }
    //write code to add a note here
    background("yellow");
    fill (0)
    textSize(30)
   text("result of the Quiz",340,)
   
   //write code to highlight contest who answered correctly
    if (answer){
      answerwillbecorrectsodogreencolour
      answerwillbenotcorrectsodoredcolour
    }
  }

}
