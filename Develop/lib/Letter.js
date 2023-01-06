class Letter {
    constructor(letter) {
        this.char = letter;
        this.visible = false;
        this.guessed = '_';

        if (!letter.match(/[A-Z|a-z|0-9]/i))
            this.visible = true;
    };

    guess(gLetter) {
        this.guessed = gLetter;
        if (gLetter === this.char) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
        return this.visible;
    };

    toString() {

        return this.guessed;
    };

    getSolution(){
        return this.char;
    };
}

module.exports = Letter;
