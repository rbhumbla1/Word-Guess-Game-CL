const Letter = require("./Letter");

class Word {

    constructor(word) {
        this.word = word;
        // this.letters = getLettersArray(word);
        this.correctGuess = true;
        this.letters = [];
        let arr = word.split('');
        let i = 0;
        arr.forEach(element => {
            const ltr = new Letter(element);
            this.letters[i] = ltr;
            i++;
        });


    };

    getLettersArray(word) {
        let arr = word.split('');

        let letterObjArray = {};

        let i = 0;
        arr.forEach(element => {
            letterObjArray[i] = new Letter(element);
            i++;
        });

        return letterObjArray;
    };

    guessedCorrectly() {
        return this.correctGuess;
    };

    guessLetter(val) {
        let letter = new Letter(val);
        let found = false;

        this.letters.forEach(obj => {
            if (obj.char === val)
                found = true;
        });

        if (!found)
            this.correctGuess = false;

        return found;
    };

    getSolution(){
        return this.word;
    }

}

module.exports = Word;
