import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useField } from "../../hooks/validation";
import { authorization } from "../../redux/usersReducer";
import Button from "./../Common/Button";
import Field from "../Common/Field";
import styled from "styled-components";
import { useState } from "react";

const WrapperAuthorized = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-basic);
  display: flex;
  justify-content: center;
  align-items: center;
  .position_container {
    width: var(--width-field);
  }
  .btn_login {
    width: 100%;
    margin: 0 auto;
    margin-top: var(--mr-md);
  }
  .registration_link {
    margin-top: var(--mr-sm);
    text-align: right;
    font-size: var(--fs-sm);
    * {
      color: var(--color-text);
      text-decoration: none;
    }
  }
`;

const AuthorizationComponent = (props) => {
  // Правила валидации для каждого поля
  let login = useField("", { isEmpty: true, minLength: 9, maxLength: 13 });
  let password = useField("", { isEmpty: true, minLength: 6, maxLength: 10 });
  console.log(props);
  let [userAuth, setUserAuth] = useState("");

  return (
    <WrapperAuthorized>
      <div className='position_container'>
        <div className='error_container'>{userAuth}</div>
        <form>
          <Field
            name='login'
            type='text'
            nameField='Login'
            placeholder='Enter Login'
            allSettings={login}
          />
          <Field
            name='password'
            type='password'
            nameField='Password'
            placeholder='Enter Password'
            allSettings={password}
          />
        </form>
        <div
          className='btn_login'
          onClick={() => {
            if (props.authorizedUser.length === 0) {
              setUserAuth("Не верно введен пароль или логин");
            } else {
              setUserAuth("");
            }
            props.authorization(login.value, password.value);
            login.setValue("");
            password.setValue("");
          }}>
          <Button text='Login' />
        </div>
        <div className='registration_link'>
          <NavLink to='/registration'>Registration</NavLink>
        </div>
        <div>Google</div>
      </div>
    </WrapperAuthorized>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    authorizedUser: state.usersReducer.authorizedUser,
  };
};
export const Authorization = connect(mapStateToProps, { authorization })(
  AuthorizationComponent
);
