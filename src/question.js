class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)

   
    
        constructor(text, choices, answer, difficulty) {
          this.text = text;                   // Assigns the 1st argument (string) to the text property
          this.choices = choices;             // Assigns the 2nd argument (array of strings) to the choices property
          this.answer = answer;               // Assigns the 3rd argument (string) to the answer property
          this.difficulty = difficulty;       // Assigns the 4th argument (number) to the difficulty property
        }

    // 2. shuffleChoices()

    shuffleChoices() {
      // Create a copy of the choices array
      let newChoices = [...this.choices];

      // Swap the last element with a random one, ensuring at least one swap
      let last = newChoices.length - 1;
      let j = Math.floor(Math.random() * (last + 1));
      [newChoices[last], newChoices[j]] = [newChoices[j], newChoices[last]];

      // Continue with the rest of the shuffle
      for (let i = last - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          [newChoices[i], newChoices[j]] = [newChoices[j], newChoices[i]];
      }

      // Assign the shuffled array back to this.choices
      this.choices = newChoices;

      // Return the shuffled choices
      return this.choices;
  }
}