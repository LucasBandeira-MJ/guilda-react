import './App.styles.sass'
import { ControlBox } from './components/ControlBox'

import { DialogBox } from './components/DialogBox'

function App() {
  return (
    <div className="container">
      <DialogBox />
      <ControlBox />
    </div>
  )
}

export default App
