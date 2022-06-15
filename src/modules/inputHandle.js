// Getting Input Values and Store to Localstorage
const inputForm = (addScore, render) => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputForm = document.querySelector('#form').elements;
    const { name } = inputForm;
    const { score } = inputForm;
    if (name.value.trim()) {
      const item = {
        name: name.value,
        score: score.value,
      };
      name.value = '';
      score.value = '';
      addScore(item);
      render();
    }
  });
};

export default inputForm;
