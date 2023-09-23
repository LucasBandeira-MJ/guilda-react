import { createContext, useEffect, useState } from 'react'
import { dialogOptions } from '../data/dialogOptions'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const QuestsContext = createContext()

export const QuestsProvider = ({ children }) => {
  const [questStatus, setQuestStatus] = useState('frontDesk')
  const [dialog, setDialog] = useState(dialogOptions.frontDesk)
  const [activeQuest, setActiveQuest, clearActiveQuest] = useLocalStorage(
    'activeQuest',
    null,
  )

  useEffect(() => {
    activeQuest
      ? console.log('activeQuest: ', activeQuest)
      : console.log('inactive')
  }, [activeQuest])

  const requestQuest = () => {
    setQuestStatus('requesting')
    setDialog(dialogOptions.requesting)
  }

  const acceptQuest = () => {
    setQuestStatus('accepted')
    setDialog(dialogOptions.accepted)

    setActiveQuest('Questman')
  }

  const rejectQuest = () => {
    setQuestStatus('rejected')
    setDialog(dialogOptions.rejected)

    clearActiveQuest()
  }

  return (
    <QuestsContext.Provider
      value={{
        questStatus,
        dialog,
        requestQuest,
        acceptQuest,
        rejectQuest,
      }}
    >
      {children}
    </QuestsContext.Provider>
  )
}
