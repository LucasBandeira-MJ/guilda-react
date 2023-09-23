import { ChevronRight } from '@components/ChevronRight'

export const ControlButton = ({ children, onButtonClick }) => {
  return (
    <button type="button" onClick={() => onButtonClick()}>
      <ChevronRight />
      {children}
    </button>
  )
}
