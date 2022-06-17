import { displayScore } from './render.js';

class Score {
  constructor() {
    this.scoreTable = document.querySelector('#score-table');
    this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IgV49UDacDdHmcp7VPxG/scores/`;
  }
  render = () => {
    displayScore(this.scoreTable, this.url);
  };

}
export default Score;