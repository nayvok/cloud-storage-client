import {useDispatch, useSelector} from "react-redux";
import {selectFiles} from "../features/user/userSlice.ts";
import FileCard from "../components/fileCard.tsx";
import Selecto from "react-selecto";
import {addFileId, removeFileId} from "../features/filesSlice.ts";
import {Empty} from 'antd';


const MediaPage = () => {

    const data = useSelector(selectFiles);
    const dispatch = useDispatch();


    if (data && data.length === 0) {
        return (
            <div className={'flex justify-center items-center p-6 border-l-2 w-full'}>
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={
                        <span>Пусто</span>
                    }
                />
            </div>
        )
    }

    return (
        <>
            <Selecto
                dragContainer={".files"}
                selectableTargets={[".file"]}
                hitRate={4}
                selectFromInside
                ratio={0}
                onSelect={e => {
                    e.added.forEach(el => {
                        el.classList.add("file-active")
                        dispatch(addFileId(el.id))

                    });
                    e.removed.forEach(el => {
                        el.classList.remove("file-active");
                        dispatch(removeFileId(el.id))
                    });
                }}
            />
            <div
                className={'files flex justify-center gap-2 sm:gap-3 md:justify-start flex-wrap py-6 md:p-6 border-solid border-t-2 md:border-t-0 md:border-l-2 border-0 border-[#F6F7F8] w-full'}>
                {data.map((item) => (
                    <FileCard key={item.id} id={item.id} name={item.name} fileName={item.fileName} createdAt={item.createdAt}
                              mimeType={""} url={""}/>
                ))}
            </div>
        </>
    );
};

export default MediaPage;
