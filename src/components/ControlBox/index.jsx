/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react'
import './ControlBox.styles.sass'
import { QuestsContext } from '@context/QuestsContext'
import { ChevronRight } from '../ChevronRight'
import { ControlButton } from '../ControlButton'

export const ControlBox = () => {
  const {
    questStatus,
    requestQuest,
    acceptQuest,
    rejectQuest,
    completeQuest,
    abandonQuest,
  } = useContext(QuestsContext)

  return (
    <div className="controlBox">
      {questStatus === 'frontdesk' && (
        <ControlButton onButtonClick={requestQuest}>
          Give me a quest!
        </ControlButton>
      )}

      {questStatus === 'random' && (
        <>
          <ControlButton onButtonClick={acceptQuest}>
            Sounds great, let's do this!
          </ControlButton>

          <ControlButton onButtonClick={rejectQuest}>
            I don't wanna do that!
          </ControlButton>
        </>
      )}

      {questStatus === 'active' && (
        <>
          <ControlButton onButtonClick={completeQuest}>
            Complete Quest
          </ControlButton>

          <ControlButton onButtonClick={abandonQuest}>
            Abandon quest
          </ControlButton>
        </>
      )}
    </div>
  )
}
