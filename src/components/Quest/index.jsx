import './Quest.styles.sass'

export const Quest = () => {
  return (
    <div className="questContainer">
      <div>
        <h3>Quest</h3>
        <span>Learn how to drive</span>
      </div>
      <div>
        <h3>Difficulty:</h3>
        <span>Medium</span>
      </div>
      <div>
        <h3>Objective</h3>
        <span>Learn how to drive a car around town</span>
      </div>
      <div>
        <h3>Completion requirements</h3>
        <span>
          Go to the supermarket and buy groceries, as well as go to the shopping
          mall and watch a movie.
        </span>
      </div>
    </div>
  )
}
