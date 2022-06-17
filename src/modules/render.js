import getScores from './getScores.js';

const displayScore = async (scoreTable, url) => {
  const data = await getScores(url);
  scoreTable.innerHTML = '';
  data.result.forEach((item) => {
    const scoreItems = `  <tr ><td><b>${item.user}</b> : <b>${item.score}</b></td></tr>`;
    scoreTable.innerHTML += scoreItems;
  });
};
export default displayScore;