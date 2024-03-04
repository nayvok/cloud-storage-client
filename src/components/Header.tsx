import {Button, Layout} from "antd";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../features/user/userSlice.ts";
import {CloudServerOutlined} from "@ant-design/icons";


const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate("/auth")
    }

    return (
        <Layout.Header className={'bg-[#1677ff] flex justify-center px-8'}>
            <div className={'w-full sm:max-w-[1200px] flex items-center justify-between'}>
                <h1 className={'text-xl font-bold text-white flex items-center gap-3'}><CloudServerOutlined className={'text-3xl'}/> Cloud Storage</h1>
                <Button onClick={handleLogout} size={'middle'}>Выход</Button>
            </div>
        </Layout.Header>
    );
};

export default Header;