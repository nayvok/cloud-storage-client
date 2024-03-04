import {FC, useState} from "react";
import {Alert, Button, Form, Input} from "antd";
import {useLazyGetMediaQuery, useLoginMutation} from "../../api/services/userApi.ts";
import {useNavigate} from "react-router-dom";

const LoginForm: FC = () => {

    const [error, setError] = useState(false)
    const [login] = useLoginMutation()
    const [triggerMediaQuery] = useLazyGetMediaQuery()
    const navigate = useNavigate()

    const onSubmit = async (values: { email: string, password: string }) => {
        try {
            await login(values).unwrap()
            await triggerMediaQuery(1)
            navigate('/')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <Form
            name="login"
            layout={'vertical'}
            style={{width: "100%"}}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={onSubmit}
        >

            {error ?
                <Form.Item>
                    <Alert message="Почта или пароль введены неверно" type="error"/>
                </Form.Item>
                :
                <></>
            }


            <Form.Item
                label="Почта"
                name="email"
                rules={[{required: true, message: 'Введите почту'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Введите пароль'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;