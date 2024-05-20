import { useCallback, useState } from 'preact/hooks'
import './EditorNotty.css'
import CodeMirror from '@uiw/react-codemirror'
import NottyView from './components/NottyView.tsx'
type Props = {
    initialMsg: string
}

function EditorNotty({initialMsg}: Props){

    const [notty, setNotty] = useState<string | null>('')
    if(!notty){
        setNotty(initialMsg)
    }


    const onChange = useCallback((value: string, viewUpdate: unknown) => {
            setNotty(value)
    }, [])

    return (

        <div className="editor-notty">
           {
            notty && 
            <>
                <CodeMirror
            value={notty}
            className='code-mirror-wrapper'
            height='400px'
            width='500px'
            //extensions={[markdown()]}
            onChange={onChange}
            />
            <NottyView content={notty}/>
            </>
            
           }
            
        </div>

    )
}
export default EditorNotty