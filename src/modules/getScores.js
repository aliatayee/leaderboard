const getScores = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export default getScores;