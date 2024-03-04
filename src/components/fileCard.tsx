import {FC, useEffect, useState} from 'react';
import {IFile} from "../api/types.ts";
import axios from "axios";
import {getExtensionFromFileName} from "../utils/getExtensionFileName.ts";
import {isImage} from "../utils/isImage.ts";
import {FileTextOutlined} from "@ant-design/icons";
import {BASE_URL} from "../constants.ts";
import {formatDate} from "../utils/formatDate.ts";

const FileCard: FC<IFile> = ({id, fileName, name, createdAt}) => {

    const [image, setImage] = useState('')
    const ext = getExtensionFromFileName(fileName) ?? ''


    async function getFile(id: string) {
        let response
        try {
            response = (await axios.get(`${BASE_URL}/media/${id}`, {
                responseType: 'blob',
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`,}
            })).data
            return URL.createObjectURL(response)
        } catch (err) {
            return null
        }
    }

    function getImage(id: string) {
        getFile(id).then(data => {
            setImage(data!)
        })
    }

    function onDownload(id: string) {
        getFile(id).then(data => {
            const link = document.createElement('a');
            link.href = data!;
            link.setAttribute('download', fileName);
            document.body.append(link);
            link.click();
            link.remove();
        })
    }

    useEffect(() => {
        {
            isImage(ext) ? getImage(id) : null
        }
    }, []);

    return (
        <div id={id} title={`${fileName}\nДата: ${formatDate(createdAt)}`} onClick={() => onDownload(id)}
             className={'file p-4 rounded-2xl flex flex-col gap-3 items-center w-36 hover:bg-[rgba(0,0,0,0.2)] transition ease-in-out duration-200 cursor-pointer select-none'}>
            <div className={'relative'}>
                <i className={'absolute bottom-0 left-0 text-[12px] px-1.5 py-[3px] bg-[#777] uppercase text-white font-bold rounded-md -mb-1.5 text-center'}>{ext}</i>
                {isImage(ext) ?
                    <img src={image} alt={name} className={'w-28 h-28 object-cover rounded-md'}/>
                    :
                    <FileTextOutlined className={'text-[7rem] text-[#1677ff]'}/>}
            </div>
            <div className={'w-full '}>
                <p className={'text-wrap text-center w-full break-words line-clamp-2 text-sm'}>{fileName}</p>
            </div>
        </div>
    );
};

export default FileCard;

//style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px'}}