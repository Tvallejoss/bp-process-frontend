// Styles
import classes from "./login.module.css";

// Components
import LoginForm from "@/components/molecules/LoginForm/LoginForm.jsx";

const LoginPage = () => {
    return (
        <div className={classes["container"]}>
            <LoginForm />
        </div>
    );
};
export default LoginPage;
