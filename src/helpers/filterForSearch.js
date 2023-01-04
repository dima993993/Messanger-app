export const filterForSearch = (arr, fieldValue, objKey) => {
  let filterArr = arr.filter((dialog) => {
    let fullName =
      dialog[objKey].firstName.toLowerCase() +
      " " +
      dialog[objKey].lastName.toLowerCase();
    let lastName = dialog[objKey].lastName.toLowerCase();
    let inputValue = fieldValue.toLowerCase();
    let currentSymbolsFullName = fullName.slice(0, inputValue.length);
    let currentSymbolsLastName = lastName.slice(0, inputValue.length);
    return (
      currentSymbolsFullName === inputValue ||
      currentSymbolsLastName === inputValue
    );
  });
  return filterArr;
};
