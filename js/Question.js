class Question{
    constructor(){

    }
    hide(){

    }
    
    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What month of the year has 28 days?");
        this.question.position(150, 80);
        this.option1.html("1: February");
        this.option1.position(150, 100);
        this.option2.html("2: December");
        this.option2.position(150, 120);
        this.option3.html("3: All of Them");
        this.option3.position(150, 140);
        this.option4.html("4: April");
        this.option4.position(150, 160);

        this.input1.position(150, 230)
    }
}