export const getRandomQuestions = (pool: any[], count = 10) => {
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
};
