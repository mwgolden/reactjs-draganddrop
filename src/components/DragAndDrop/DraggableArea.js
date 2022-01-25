import React from "react";
import { createUseStyles } from 'react-jss';
import handleStartDrag from './DragHandler';


const useStyles = createUseStyles({
    draggableArea: (props) => ({
        boxSizing:'border-box',
        width: props.width + 'px',
        height: props.height + 'px',
        border: '1px solid black',
        margin: '50px'
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