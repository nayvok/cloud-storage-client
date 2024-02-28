import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "../../features/user/userSlice.ts";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Container} from "./Container.tsx";
import Header from "../Header.tsx";

const Layout = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth')
        }
    }, []);

    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;