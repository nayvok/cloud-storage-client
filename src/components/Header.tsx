import {Button, Layout} from "antd";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../features/user/userSlice.ts";


const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate("/auth")
    }

    return (
        <Layout.Header>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <h1 style={{color: 'white'}}>Storage</h1>
                <Button onClick={handleLogout}>Выход</Button>
            </div>
        </Layout.Header>
    );
};

export default Header;