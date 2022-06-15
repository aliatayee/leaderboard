const displayScore = (data, scoreTable) => {
  scoreTable.innerHTML = '';
  data.forEach((item) => {
    const scoreItems = `  <tr ><td><b>${item.name}</b> : <b>${item.score}</b></td></tr>`;
    scoreTable.innerHTML += scoreItems;
  });
};

export default displayScore;