    // YOUR CODE HERE:
    // 1. constructor (questions, timeLimit, timeRemaining
    class Quiz {
        constructor(questions, timeLimit, timeRemaining) {
          this.questions = questions; // Array of Question objects
          this.timeLimit = timeLimit; // Total time limit for the quiz
          this.timeRemaining = timeRemaining; // Remaining time for the quiz
          this.correctAnswers = 0; // Count of correct answers
          this.currentQuestionIndex = 0; // Index of the current question

        }
    // 2. getQuestion()
        getQuestion() {
          // Returns the current question
          return this.questions[this.currentQuestionIndex];
        }
    // 3. moveToNextQuestion()
        moveToNextQuestion() {
          // Increments the index to move to the next question
          this.currentQuestionIndex++;
        }

    // 4. shuffleQuestions
        shuffleQuestions() {
          // Create a copy of the questions array
          let newChoices = [...this.questions];
  
          // Fisher-Yates shuffle algorithm
          for (let i = newChoices.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [newChoices[i], newChoices[j]] = [newChoices[j], newChoices[i]];
          }
  
          // Assign the shuffled array back to this.questions
          this.questions = newChoices;
  
          // Return the shuffled questions
          return this.questions;
      }





     // 5. checkAnswer(answer)
        checkAnswer(answer) {
          // Checks if the provided answer matches the answer of the current question
          const currentQuestion = this.questions[this.currentQuestionIndex];
          if (currentQuestion && answer === currentQuestion.answer) {
            this.correctAnswers++;
          }
        }
    // 6. hasEnded()
        hasEnded() {
          // Check if the quiz has reached the end
          return this.currentQuestionIndex >= this.questions.length;
        }
      }






