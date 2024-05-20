

type Props = {
    sttNotty: Object
}

function CtrlNotty({sttNotty}: Props){
    return(
        <div className="ctrl-notty">
            CtrlNotty-{JSON.stringify(sttNotty)}
        </div>
    )
}

export default CtrlNotty;