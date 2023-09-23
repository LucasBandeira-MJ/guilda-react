import { useContext } from 'react'
import './DialogBox.styles.sass'
import { QuestsContext } from '@context/QuestsContext'

export const DialogBox = () => {
  const { dialog } = useContext(QuestsContext)
  return (
    <div className="dialogContainer">
      <h2>{dialog.header}</h2>
      <p>{dialog.body}</p>
    </div>
  )
}
