const getDiffBetweenDays = (x) => {
  const todayDate = new Date(Date.now() - (3600 * 1000 * 24));
  const birthday = new Date(x);
  birthday.setFullYear(todayDate.getFullYear());

  if (todayDate > birthday) return;
  const diff = new Date(birthday - todayDate);
  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  if (day === 0) return (999);
  if (day < 30) return (day);
};
export default getDiffBetweenDays;
