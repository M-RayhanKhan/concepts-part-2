import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  const handleClick = () => {
    console.log('click button');
  }
  const handleClick2 = () => {
    console.log('click2');
  }
  const addToSeven = (num) => {
    alert(num + 6)
  }

  return (
    <>
      <div style={{border:"2px solid tomato"}}>
       <Friends></Friends>
        <Users></Users>
        <Team></Team>
        <Counter></Counter>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClick2}>Click2</button>
        <button onClick={() => { alert('third clicked') }}>Third</button>
        <button onClick={() => addToSeven(7)}>Four</button>
      </div>
    </>
  )
}

export default App
