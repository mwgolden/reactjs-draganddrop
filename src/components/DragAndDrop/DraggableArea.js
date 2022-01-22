import React from "react";
import { createUseStyles } from 'react-jss';


function handleStartDrag(event) {
    //event.stopPropagation()
    
    const draggableItem = event.target
    const draggableArea = draggableItem.parentElement.getBoundingClientRect()
    const boundingBox = draggableItem.getBoundingClientRect()
    const mouseOffsetX = event.pageX - boundingBox.left
    const mouseOffsetY = event.pageY - boundingBox.top
    const currentPosition = {
      x:draggableArea.left, y:draggableArea.top
    }
    function moveAt(pageX, pageY){
      const tx = pageX - mouseOffsetX 
      const ty = pageY - mouseOffsetY
      if(tx >= draggableArea.left && (tx + boundingBox.width) <= draggableArea.right) {
        currentPosition.x = tx
      }
      if(ty >= draggableArea.top && (ty + boundingBox.height) <= draggableArea.bottom){
        currentPosition.y = ty
      }
      draggableItem.style.transform = `matrix(1,0,0,1,${currentPosition.x},${currentPosition.y})`
     
    }
    function onMouseMove(event){
      moveAt(event.pageX, event.pageY)
    }

    //move only when left mouse button clicked
    if(event.button === 0){
      document.addEventListener('mousemove', onMouseMove)
      moveAt(event.pageX, event.pageY)
    }
    

    document.onmouseup = function(){
      document.removeEventListener('mousemove', onMouseMove)
      document.onmouseup = null
    }
    draggableItem.ondragstart = function(){
      return false
    }
  }

const useStyles = createUseStyles({
    draggableArea: (props) => ({
        boxSizing:'border-box',
        width: props.width + 'px',
        height: props.height + 'px',
        border: '1px solid black'
    })
})
function DraggableArea(props){
    const classes = useStyles(props)
    return (
        <div className={classes.draggableArea}>
            {React.Children.map(props.children, child => {
               if(React.isValidElement(child)){
                   return React.cloneElement(child, {handleStartDrag})
               }
               return child 
            })}
        </div>
    )
}
export default DraggableArea