import {Button, notification, Upload} from "antd";
import {CloudUploadOutlined} from "@ant-design/icons";
import {useLazyGetMediaQuery, useUploadMediaMutation} from "../api/services/userApi.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectFiles} from "../features/user/userSlice.ts";


const UploadButton = () => {

    const [upload, {isLoading, isSuccess, isError}] = useUploadMediaMutation()
    const [triggerQuery] = useLazyGetMediaQuery()

    const [isMaxFiles, setIsMaxFiles] = useState(false)
    const filesCount = useSelector(selectFiles);

    // @ts-ignore
    const onUploadSuccess = async ({file}) => {
        try {
            const formData = new FormData();
            formData.append("files[]", file);
            await upload(formData);
            await triggerQuery(1);
        } catch (err) {
            notification.error({
                message: "Ошибка!",
                description: "Не удалось загрузить файл",
                duration: 2,
            });
        }
    }

    useEffect(() => {
        if (isError) {
            notification.error({
                message: "Ошибка!",
                description: "Не удалось загрузить файл",
                duration: 2,
            });
        }
        if (isSuccess) {
            notification.success({
                message: "Успешно!",
                description: "Файл загружен",
                duration: 2,
            });
        }
        if (filesCount.length >= 20) {
            setIsMaxFiles(true)
        } else {
            setIsMaxFiles(false)
        }
    }, [isError, isSuccess, filesCount]);

    return (
        <Upload
            customRequest={onUploadSuccess}
            showUploadList={false}
            multiple
            maxCount={3}
        >
            <Button type={"primary"}
                    icon={<CloudUploadOutlined/>}
                    size={'large'}
                    loading={isLoading}
                    disabled={isMaxFiles}
                    className={'min-w-[200px]'}>Загрузить</Button>
        </Upload>
    );
};

export default UploadButton;