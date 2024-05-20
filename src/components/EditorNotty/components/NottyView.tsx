import {useEffect, useRef, useState} from 'preact/hooks'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import './NottyView.css'

type Props = {
    content: string
}

function NottyView({content}: Props){
    const contentWrapper = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        unified().use(remarkParse).use(remarkRehype).use(rehypeSanitize).use(rehypeStringify).process(content, (err, file) => {
            if (err) throw err
            if (contentWrapper.current) {
                contentWrapper.current.innerHTML = String(file);
            }
        })

       
        
    }, [content])

    return (
        <div ref={contentWrapper} className='notty'></div>
    )
}

export default NottyView

