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

  const handleSelectItem = (day: string) => {
    console.log(day);
  }

  return (
  <div>
    <TodoList days = {days} heading = 'Days' onSelectItem={
      //can write an inline function or separate event handler
      handleSelectItem}/>
    </div>
  )
}

export default App;