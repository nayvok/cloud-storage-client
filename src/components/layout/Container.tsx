import React from "react"

type Props = {
    children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<Props> = ({ children }) => {
    return <div className="files-container flex flex-col md:flex-row w-full sm:max-w-[1226px] mx-auto mt-10 bg-white rounded-3xl">{children}</div>
}