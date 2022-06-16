import inputForm from './inputHandle.js';
import displayScore from './render.js';

class Score {
  constructor() {
    this.data = [];
    this.scoreTable = document.querySelector('#score-table');
  }

    render = () => {
      inputForm(this.addScore, this.render);
      displayScore(this.data, this.scoreTable);
    };

    addScore = (item) => {
      if (item) {
        this.data.push(item);
      }
    };
}
export default Score;