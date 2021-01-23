import React, { useRef, useState } from 'react';
import Todo from './Todo';
import AddIcon from '@material-ui/icons/Add';

function TodoList() {
    const[Input , setInput] =useState('');
    const [items, setItems] = useState([]);
    let updateTodo = useRef(null);

    const handleInput = (e)=>{
        setInput(e.target.value)
        
    }

    const handleChange = (e)=>{

       if(Input === ''){
        
          setItems('')
       }

     setItems( (olditems) => {
         return [...olditems,Input]
     })
     setInput('')
    }

    const deleteItem = (id)=>{
        console.log('deleltd item')

        setItems((olditems) => {
            return olditems.filter((arrElement,index) => {
                return index !== id;
            })
        })
    }

 

    
    return (
       <>
       <div className = 'main-div'>
           <div className='center-div'>
           <br/>
           <h1>What's Today Plan</h1>
            <br/>
         <input  type = 'text' placeholder = 'Add an Item'
         
             value={Input}
             onChange={handleInput}
             ref={updateTodo}
         />
         <button onClick={handleChange}>

         <AddIcon/>

         </button>

         <ul className='list'>
            {
                items.map( (itemsList,index) => (
                    <Todo text = {itemsList}
                        key={index}
                        id={index}
                        onSelect = {deleteItem}
                        
                    />
                ))
            }
             
         </ul>
           </div>
       </div>
       </>
    )
}

export default TodoList;
