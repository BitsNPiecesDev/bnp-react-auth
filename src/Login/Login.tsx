import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export interface Props {
  headerLabel?: string;
  loginButtonLabel?: string;
  emailFieldLabel?: string;
  passwordFieldLabel?: string;
  inputFieldSize?: "small" | "normal" | "large";
  loginButtonSize?: "small" | "normal" | "large";
  loginButtonColor?: string;

  onChange?: (event: any) => void;
  onLogin?: (event: any) => void;
}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (props.onLogin)
      props.onLogin({
        email,
        password,
      });
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
                if (props.onChange) {
                  props.onChange({ field: "email", value: e.target.value });
                }
                setEmail(e.target.value);
              }}
              size={(props.inputFieldSize ?? "normal") as any}
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
                if (props.onChange) {
                  props.onChange({ field: "password", value: e.target.value });
                }
                setPassword(e.target.value);
              }}
              size={(props.inputFieldSize ?? "normal") as any}
            />
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
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
