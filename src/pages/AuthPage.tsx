import {Tabs} from "antd";
import LoginForm from "../components/auth/LoginForm.tsx";
import RegisterForm from "../components/auth/RegisterForm.tsx";
import {useAuthGuard} from "../hooks/useAuthGuard.ts";


const AuthPage = () => {

    useAuthGuard();

    return (
        <main style={{ width: 350, margin: "50px auto"}}>
            <Tabs
                items = {[
                    {
                        label: 'Вход',
                        key: '1',
                        children: <LoginForm/>,
                    },
                    {
                        label: 'Регистрация',
                        key: '2',
                        children: <RegisterForm/>,
                    },
                ]}
            />
        </main>
    );
};

export default AuthPage;