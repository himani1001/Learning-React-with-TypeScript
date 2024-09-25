import TodoList from "./components/TodoList";

function App(){ 

  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
  return (
  <div>
    <TodoList days = {days} heading = 'Days'/>
    </div>
  )
}

export default App;