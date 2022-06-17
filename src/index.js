import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './modules/scoreBoard.js';
import { sendScore } from './modules/sendScore.js';
const Form = document.getElementById('form');
const refresh = document.getElementById('refresh');
const score = new Score();
score.render();
refresh.addEventListener('click', () => {
  window.location.reload();
});
Form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendScore(score.url, score.render);
});
