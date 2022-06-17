
const Form = document.getElementById('form');
export const sendScore = async (url, render) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: Form.name.value,
        score: Form.score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    Form.name.value = '';
    Form.score.value = '';
    render();
    return res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};