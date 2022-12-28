import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import { useField } from "../../hooks/validation";
import Button from "./../Common/Button";
import Field from "../Common/Field";
import { authorization } from "../../redux/usersReducer";

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
  let login = useField("", { isEmpty: true, minLength: 9, maxLength: 13 });
  let password = useField("", { isEmpty: true, minLength: 6, maxLength: 10 });
  let navigate = useNavigate();
  useEffect(() => {
    if (props.authorizedUser) {
      navigate("/");
    }
  }, []);

  return (
    <WrapperAuthorized>
      <div className="position_container">
        <form>
          <Field
            name="login"
            type="text"
            nameField="Login"
            placeholder="Enter Login"
            allSettings={login}
          />
          <Field
            name="password"
            type="password"
            nameField="Password"
            placeholder="Enter Password"
            allSettings={password}
          />
        </form>
        <div
          className="btn_login"
          onClick={() => {
            props.authorization(login.value, password.value);
            login.setValue("");
            password.setValue("");
          }}
        >
          <Button text="Login" />
        </div>
        <div className="registration_link">
          <NavLink to="/registration">Registration</NavLink>
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
