import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    draggableItem: (props) => ({
        position: 'absolute',
        border: '1px solid black',
        padding: '1px',
        top: props.x,
        left: props.y,
        '& *' : {
            pointerEvents:'none'
        }
    }) 
})

function DraggableItem(props) {
    
    const classes = useStyles(props)
    return (
        <div className={classes.draggableItem} onMouseDown={props.handleStartDrag} >
            {props.children}
        </div>
    )
}
export default DraggableItem