import {useEffect, useRef} from 'preact/hooks'
import './NottyView.css'

type Props = {
    content: string
}

function NottyView({content}: Props){

    const contentWrapper = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(contentWrapper.current){
            contentWrapper.current.innerHTML = content
        }
    }, [content])

    return (
        <div ref={contentWrapper} className='notty'></div>
    )
}

export default NottyView

