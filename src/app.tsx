import CtrlNotty from "./components/CtrlNotty/CtrlNotty"
import EditorNotty from "./components/EditorNotty/EditorNotty"


function App(){


return (


// Suggested code may be subject to a license. Learn more: ~LicenseLog:3677543890.
  <div>
    <h1>Hello</h1>
    <CtrlNotty 
      sttNotty={{
        csl: 'hola',
        alert: 'hola'
      }}
    />
    <EditorNotty initialMsg=" " />
  </div>

)


}

export default App