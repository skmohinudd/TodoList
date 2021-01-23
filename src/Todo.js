import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {
    const [line,setLine] = useState();

    const mark = ()=>{
        setLine(true)
    }
    return (
       <>
        <div className='todo-style'>
          <span className='icon'
          
          onClick = {
              ()=> {
                  props.onSelect(props.id)
              }
          }
           >
           <Tooltip title = 'Delete'>
                <DeleteIcon />
           </Tooltip>
           
            </span>
          <li style={{textDecoration : line ?  "line-through" : "none" }}>{props.text}</li>
          <span className='tick'
          >
              <Tooltip title='Task Done'>
              <DoneIcon onClick={mark}/>
              </Tooltip>
          </span>
          <span className='edit'
          onClick={
              ()=>{
                  props.update(props.id)
              }
          }
          >
              <Tooltip title= 'Edit'>
              <EditIcon/>
              </Tooltip>
          </span>
        </div>
       </>
    )
}

export default Todo;
