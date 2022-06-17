import displayScore from './render.js';

class Score {
  constructor() {
    this.scoreTable = document.querySelector('#score-table');
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SKyj4JbVvkGO9yiHwdV0/scores/';
  }

  render = () => {
    displayScore(this.scoreTable, this.url);
  };
}
export default Score;