import './Quest.styles.sass'

export const Quest = () => {
  return (
    <div className="questContainer">
      <h2 className="questTitle">Learn how to drive</h2>
      <div>
        <h3>Quest type:</h3>
        <span>Practical</span>
      </div>
      <div>
        <h3>Difficulty:</h3>
        <span>Medium</span>
      </div>
      <div>
        <h3>Objective:</h3>
        <span>Learn how to drive a car around town</span>
      </div>
      <div>
        <h3>Completion requirements:</h3>
        <span>
          Go to the supermarket and buy groceries, as well as go to the shopping
          mall and watch a movie.
        </span>
      </div>
    </div>
  )
}
