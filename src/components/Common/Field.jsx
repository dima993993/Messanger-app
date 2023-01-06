import styled from "styled-components";

const WrapperField = styled.div`
  width: 100%;
  .name_field {
    font-weight: var(--fw-bold);
    margin: var(--mr-sm) var(--mr-xs);
  }
  .error {
    color: var(--color-error);
    margin: var(--mr-xs);
  }
  .block_field {
    display: flex;
  }
  input {
    width: 100%;
    height: var(--height-elem);
    outline: none;
    border: none;
    border-radius: var(--radius-item);
    font-size: var(--fs-sm);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: var(--color-aditional);
    color: var(--color-text);
    padding-left: var(--pd-sm);
  }
`;

const Field = ({ type, name, nameField, placeholder, allSettings }) => {
  // Выбор сообщения с ошибкой
  const changeError = (nameField) => {
    switch (true) {
      case allSettings.isEmpty:
        return "Поле не может быть пустым";
      case allSettings.minLengthError:
        return `${nameField} должен быть длинее`;
      case allSettings.maxLengthError:
        return `${nameField} должен быть короче`;
      default:
        return "";
    }
  };

  return (
    <WrapperField>
      <div className="name_field">{nameField}</div>
      <div className="error">
        {allSettings.isDirty && changeError(nameField)}
      </div>
      <div className="block_field">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={allSettings.value}
          onBlur={(e) => allSettings.onBlur(e)}
          onChange={(e) => allSettings.onChange(e)}
          autoComplete="off"
        />
        <div></div>
      </div>
    </WrapperField>
  );
};
export default Field;
