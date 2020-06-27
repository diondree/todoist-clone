export const formatDateString = (date: string) => {
  const dateParts = date.split(' ');
  return `${dateParts[1]} ${dateParts[2]}`;
};
