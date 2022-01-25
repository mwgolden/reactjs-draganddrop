
import './App.css';
import DraggableArea from './components/DragAndDrop/DraggableArea';
import DraggableItem from './components/DragAndDrop/DraggableItem';


const square = {
  height: '50px',
  width: '50px',
  border: '1px solid red'
}

function Square() {
  return (
    <div style={square}></div>
  )
}

function App() {
  return (
    <div className="App">
      <div style={{margin:'50px', padding:'150px'}}>
      <DraggableArea width={500} height={300} >
        <DraggableItem>
          <Square />
        </DraggableItem>
        <Square draggable/>
      </DraggableArea>
      </div>
    </div>
  );
}

export default App;
