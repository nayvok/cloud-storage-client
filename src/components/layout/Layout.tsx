import {useSelector} from "react-redux";
import {selectFiles, selectIsAuthenticated} from "../../features/user/userSlice.ts";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Container} from "./Container.tsx";
import Header from "../Header.tsx";
import UploadButton from "../UploadButton.tsx";
import DeleteButton from "../DeleteButton.tsx";

const Layout = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated)
    const navigate = useNavigate()

    const files = useSelector(selectFiles);
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth')
        }
    }, []);

    return (
        <>
            <Header/>
            <main className={'px-8'}>
                <Container>
                    <div className={'h-full flex flex-col gap-3 px-6 py-10'}>
                        <UploadButton/>
                        <DeleteButton/>
                        <h1 className={'text-lg text-center'}>Всего файлов: {files!.length}</h1>
                    </div>
                    <Outlet/>
                </Container>
            </main>
        </>
    );
};

export default Layout;