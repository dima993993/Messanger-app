import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  useEffect(() => {
    for (let validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        default:
          return "";
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLengthError,
    maxLengthError,
  };
};

export const useField = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validation);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setDirty(true);
  };
  return {
    value,
    isDirty,
    onBlur,
    onChange,
    setValue,
    ...valid,
  };
};
