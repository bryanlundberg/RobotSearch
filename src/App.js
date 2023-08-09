import Card from "./components/Card";
import Controls from "./components/Controls";
import "./stylesheets/App.css"
import { useState } from "react";

function App({ users }) {
  
  const [numToShow, setNewNumToShow] = useState(0)


  const listUsers = users.map((user) => (
    <Card 
      id={user.id}
      maidenName={user.maidenName}
      image={user.image}
    />
  ))

  function handleControlClick (sign) {
    if (sign === "+") setNewNumToShow(numToShow + 1)
    if (sign === "-" && numToShow === 0) setNewNumToShow(0)
    if (sign === "-" && numToShow >= 1) setNewNumToShow(numToShow - 1)
  }

  return (
    <main className='main-container'>
      <p className="web-title">RobotSearch</p>
      <Controls handleControlClick={handleControlClick} currentUsers={numToShow} totalUsers={users.length} />
      <div className="container-list">
        {listUsers.splice(0, numToShow)}
      </div>
    </main>
  )
}

export default App;
