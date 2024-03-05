import {FC, useState} from "react";
import {Button, Form, Input, Alert} from "antd";
import {useRegisterMutation} from "../../api/services/userApi.ts";
import {useNavigate} from "react-router-dom";

const RegisterForm: FC = () => {


    const [error, setError] = useState(false)
    const [register] = useRegisterMutation()
    const navigate = useNavigate()

    const onSubmit = async (values: {email: string, password: string, name: string}) => {
        try {
            await register(values).unwrap()
            navigate('/')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <Form
            name="register"
            layout={'vertical'}
            style={{ width: "100%" }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onSubmit}
        >
            {error ?
                <Form.Item>
                    <Alert message="Ошибка регистрации" type="error"/>
                </Form.Item>
                :
                <></>
            }

            <Form.Item
                label="Имя"
                name="name"
                rules={[{ required: true, message: 'Введите имя' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Почта"
                name="email"
                rules={[{ required: true, message: 'Введите почту' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Зарегестрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;