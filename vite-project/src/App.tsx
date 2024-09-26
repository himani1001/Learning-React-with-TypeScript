// import TodoList from "./components/TodoList";

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

// import Alert from "./components/Alert";

function App(){ 

//   let days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ]

//   const handleSelectItem = (day: string) => {
//     console.log(day);
//   }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
  <div>
    {/* <TodoList days = {days} heading = 'Days' onSelectItem={
      //can write an inline function or separate event handler
      handleSelectItem}/> */}

      {/* <Alert>
        Hello <span>World!</span>
      </Alert> */}

      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}><strong>Holy guacamole!</strong> You should check in on some of those fields below.</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>Log in</Button>
    </div>
  )
}
export default App;