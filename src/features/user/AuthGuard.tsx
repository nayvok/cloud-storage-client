import {FC, JSX} from "react";
import {useGetMediaQuery} from "../../api/services/userApi.ts";

export interface  AuthGuardProps{
    children: JSX.Element
}
const AuthGuard: FC<AuthGuardProps> = ({children}) => {
    const { isLoading } = useGetMediaQuery();

    if (isLoading){
        return <></>
    }

    return children;
};

export default AuthGuard;