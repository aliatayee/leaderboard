import { getScores } from "./getScores";
export const displayScore = async (scoreTable, url) => {
  let data = await getScores(url);
  scoreTable.innerHTML = '';
  data.result.forEach((item) => {
    const scoreItems = `  <tr ><td><b>${item.user}</b> : <b>${item.score}</b></td></tr>`;
    scoreTable.innerHTML += scoreItems;
  });
};
