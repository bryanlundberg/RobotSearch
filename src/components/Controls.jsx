import "../stylesheets/Controls.css"

export default function Controls({ currentUsers, totalUsers, handleControlClick}) {
  return (
    <div className="controls-container">
      <button onClick={() => handleControlClick("-")} type="button" className="control-button"> - </button>
      <div> {currentUsers} / {totalUsers} </div>
      <button onClick={() => handleControlClick("+")} type="button" className="control-button"> + </button>
    </div>
  );
}