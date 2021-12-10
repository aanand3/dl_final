import React, {useEffect, useState} from 'react'
import Markdown from 'react-markdown'

export default function Report(){
    const [md, setMd] = useState<string>("")

    useEffect(() => {
        fetch('./dl_final/README.md')
            .then((res) => res.text())
            .then((md) => {
                console.log(md)
                setMd( md )
            })
    })
    return (
        <Markdown children={md} />
    )
}