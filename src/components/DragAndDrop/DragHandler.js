function handleStartDrag(event) {
  
    const draggableItem = event.target
    const draggableArea = draggableItem.parentElement.getBoundingClientRect()
    
    const boundingBox = draggableItem.getBoundingClientRect()
    const mouseOffsetX = event.pageX - boundingBox.left
    const mouseOffsetY = event.pageY - boundingBox.top
    const currentPosition = {
      x:draggableArea.left, y:draggableArea.top
    }
    function moveAt(pageX, pageY){
      const tx = pageX - mouseOffsetX - draggableArea.left
      const ty = pageY - mouseOffsetY - draggableArea.top
      if(tx >= 0 && (tx + boundingBox.width) <= draggableArea.width) {
        currentPosition.x = tx
      }
      if(ty >= 0 && (ty + boundingBox.height) <= draggableArea.height){
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

  export default handleStartDrag