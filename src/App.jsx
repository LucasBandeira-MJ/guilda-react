import './App.styles.sass'
import { ControlBox } from './components/ControlBox'

import { DialogBox } from './components/DialogBox'
import { Quest } from './components/Quest'

function App() {
  return (
    <div className="container">
      <DialogBox />
      <Quest />
      <ControlBox />
    </div>
  )
}

export default App
