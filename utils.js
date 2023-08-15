export const dateFormatNumber = (date) => {
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("ru", { month: "2-digit" }).format(d);
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  return `${da}.${mo}.${ye}`;
};

// Function for forms validation
export const validationFunction = (fields) => {
  let noEmpty = true;
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      noEmpty = false;
    }
  });
  return noEmpty;
};
