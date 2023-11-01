# React Login Component

A flexible and customizable login component for React applications, built with Material-UI. This component provides an easy way to create a login form with validation support.

## Installation

You can install this component using npm:

```bash
npm install bnp-react-auth
```

## Usage

To use the `Login` component in your React application, follow these steps:

1. Import the `Login` component:

```javascript
import Login from 'bnp-react-auth';
```

2. Render the `Login` component in your JSX code:

```javascript
<Login
  headerLabel="Sign In"
  loginButtonLabel="Login"
  emailFieldLabel="Email Address"
  passwordFieldLabel="Password"
  emailFieldHelperText="Enter your email address"
  passwordFieldHelperText="Enter your password"
  inputFieldSize="normal"
  loginButtonSize="normal"
  loginButtonColor="primary"
  onLogin={handleLogin}
  validators={
    {
        email: (email: string) => !!email,
        password: (password: string) => !!password,
    }
    }
/>
```

3. Implement the `handleLogin` function to handle the login process. It will be called when the login button is clicked.

```javascript
const handleLogin = ({ email, password }) => {
  // Implement your login logic here
};
```

## Props

- `headerLabel` (optional): Set the header label for the login form.
- `loginButtonLabel` (optional): Set the label for the login button.
- `emailFieldLabel` (optional): Set the label for the email input field.
- `passwordFieldLabel` (optional): Set the label for the password input field.
- `emailFieldHelperText` (optional): Set helper text for the email input field.
- `passwordFieldHelperText` (optional): Set helper text for the password input field.
- `inputFieldSize` (optional): Set the size of the input fields (small, normal, or large).
- `loginButtonSize` (optional): Set the size of the login button (small, normal, or large).
- `loginButtonColor` (optional): Set the color of the login button.
- `onLogin` (optional): Callback function to handle the login process.
- `validators` (optional): An object containing validation functions for email and password. You can also specify custom error text for validation failures.
- `onChange` (optional): Callback function for input field changes.
- `customLoginButton` (optional): Provide a custom JSX element for the login button.

## GitHub Repository

You can find the source code for this component on [GitHub](https://github.com/BitsNPiecesDev/bnp-react-auth).

## License

This component is open-source and available under the MIT License. Feel free to use and modify it in your projects.

```