const formatDate = (customDate : string) : string => {
  const months : Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date : Date = new Date(customDate);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default formatDate;