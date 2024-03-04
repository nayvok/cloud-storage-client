import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {removeFileId, selectFileIds} from "../features/filesSlice.ts";
import {useEffect, useState} from "react";
import {deleteFiles} from "../features/user/userSlice.ts";
import {useDeleteMediaByIdMutation} from "../api/services/userApi.ts";

const DeleteButton = () => {

    const files = useSelector(selectFileIds);
    const dispatch = useDispatch();
    const [useDelete] = useDeleteMediaByIdMutation();

    const [state, setState] = useState(true);



    useEffect(() => {
        if (files.length > 0){
            setState(false)
        } else {
            setState(true)
        }
    }, [files]);

    const onDelete = () => {
        for (let i=0; i < files.length; i++){
            dispatch(deleteFiles(files[i]))
            useDelete(files[i])
            dispatch(removeFileId(files[i]))
        }
    }

    return (
        <Button danger size={'large'} type={"primary"} disabled={state} onClick={onDelete} className={'w-[200px]'}>Удалить</Button>
    );
};

export default DeleteButton;