import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './modules/scoreBoard.js';
import inputForm from './modules/inputHandle.js';

const refresh = document.getElementById('refresh');
const score = new Score();
inputForm(score.addScore, score.render);

refresh.addEventListener('click', () => {
  window.location.reload();
});