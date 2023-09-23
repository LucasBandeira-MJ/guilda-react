import { createContext, useState } from 'react'

export const QuestsContext = createContext()

export const QuestsProvider = ({ children }) => {
  const [questStatus, setQuestStatus] = useState('frontDesk')
  const [dialog, setDialog] = useState({
    header: 'Hello Adventurer!',
    body: 'What can I help you with today?',
  })

  const requestQuest = () => {
    setQuestStatus('requesting')

    setDialog({
      header: 'Sure thing!',
      body: 'Is the following quest to your liking?',
    })
  }

  const acceptQuest = () => {
    setQuestStatus('accepted')

    setDialog({
      header: 'Glad to hear!',
      body: 'have a nice quest!',
    })
  }

  const rejectQuest = () => {
    setQuestStatus('rejected')

    setDialog({
      header: 'Sorry to hear',
      body: 'Please let me know if I can be of any more help.',
    })
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
