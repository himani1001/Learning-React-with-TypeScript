// import TodoList from "./components/TodoList";

import Button from "./components/Button";

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

  return (
  <div>
    {/* <TodoList days = {days} heading = 'Days' onSelectItem={
      //can write an inline function or separate event handler
      handleSelectItem}/> */}

      {/* <Alert>
        Hello <span>World!</span>
      </Alert> */}

      <Button color="secondary" onClick={() => console.log('Clicked')}>Log in</Button>
    </div>
  )
}
export default App;