const validateStringField = (name, string) => {
  if (typeof string !== "string") {
    throw new TypeError(name + " field is not a string!");
  }
  if (Boolean(string.trim()) === false) {
    throw new Error(name + " field can't be empty!");
  }
};

const validatePositiveNumberField = (name, number) => {
  if (typeof number !== "number") {
    throw new TypeError(name + " field is not a number!");
  }
  if (number <= 0) {
    throw new Error(name + " field must be more then 0!");
  }
};
