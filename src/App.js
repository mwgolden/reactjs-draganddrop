
import './App.css';
import DraggableArea from './components/DragAndDrop/DraggableArea';
import DraggableItem from './components/DragAndDrop/DraggableItem';


const square = {
  height: '50px',
  width: '50px'
}

function Square() {
  return (
    <div style={square}></div>
  )
}

function App() {
  return (
    <div className="App">
      <DraggableArea width={500} height={300} >
        <DraggableItem>
          <Square />
        </DraggableItem>
      </DraggableArea>
    </div>
  );
}

export default App;
