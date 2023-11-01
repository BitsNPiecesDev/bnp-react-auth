import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export interface Props {
  headerLabel?: string | React.JSX.Element;
  loginButtonLabel?: string;
  emailFieldLabel?: string;
  passwordFieldLabel?: string;
  emailFieldHelperText?: string;
  passwordFieldHelperText?: string;
  inputFieldSize?: "small" | "normal" | "large";
  loginButtonSize?: "small" | "normal" | "large";
  loginButtonColor?: string;

  customLoginButton?: React.JSX.Element;
  validators?: Validator;
  onChange?: (event: any) => void;
  onLogin?: (event: any) => void;
}

export interface Validator {
  email: (email: string) => boolean;
  emailFieldErrorText?: string;
  password: (email: string) => boolean;
  passwordFieldErrorText?: string;
}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessages, setValidationMessages] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (props.onLogin)
      props.onLogin({
        email,
        password,
      });
  };

  const onInputChange = ({ field, value }: any) => {
    switch (field) {
      case "email":
        setEmail(value);
        if (props.validators?.email) {
          if (props.validators.email(value)) {
            setValidationMessages((currState: any) => ({
              ...currState,
              email: "",
            }));
          } else {
            setValidationMessages((currState: any) => ({
              ...currState,
              email: props.validators?.emailFieldErrorText ?? "Invalid email !",
            }));
          }
        } else {
          setValidationMessages((currState: any) => ({
            ...currState,
            email: "",
          }));
        }
        return;

      case "password":
        setPassword(value);
        if (props.validators?.password) {
          if (props.validators.password(value)) {
            setValidationMessages((currState: any) => ({
              ...currState,
              password: "",
            }));
          } else {
            setValidationMessages((currState: any) => ({
              ...currState,
              password:
                props.validators?.emailFieldErrorText ??
                "Invalid password format !",
            }));
          }
        } else {
          setValidationMessages((currState: any) => ({
            ...currState,
            password: "",
          }));
        }
        return;

      default:
        return;
    }
  };

  return (
    <Card style={{ maxWidth: "400px" }}>
      <CardContent>
        <div style={{}}>
          <Typography component="h1" variant="h5">
            {props.headerLabel ?? "Sign In"}
          </Typography>
          <form style={{ width: "100%", marginTop: "8px" }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={props.emailFieldLabel ?? "Email Address"}
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                const data = { field: "email", value: e.target.value };
                if (props.onChange) {
                  props.onChange(data);
                }
                onInputChange(data);
              }}
              size={(props.inputFieldSize ?? "normal") as any}
              helperText={
                validationMessages.email ?? props.emailFieldHelperText
              }
              error={!!validationMessages.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={props.emailFieldLabel ?? "Password"}
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                const data = { field: "password", value: e.target.value };
                if (props.onChange) {
                  props.onChange(data);
                }
                onInputChange(data);
              }}
              size={(props.inputFieldSize ?? "normal") as any}
              helperText={
                validationMessages.password ?? props.passwordFieldHelperText
              }
              error={!!validationMessages.password}
            />
            {props.customLoginButton ?? (
              <Button
                fullWidth
                variant="contained"
                color={props.loginButtonColor ?? ("primary" as any)}
                style={{ margin: "24px 0 16px" }}
                onClick={handleLogin}
                size={(props.loginButtonSize ?? "normal") as any}
              >
                {props.loginButtonLabel ?? "Sign In"}
              </Button>
            )}
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
