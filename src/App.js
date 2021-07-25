import React, {useState} from 'react';
import ToDoLists from './ToDoList';
import './App.css';

const App = () =>{

    const[inputList, setinputList] = useState("");
    const[Items, setItems] = useState([]);

    const itemEvent = (event) =>{
        setinputList(event.target.value);
    }

    const listofItem = () =>{
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
        setinputList('');
    };

    const deleteItems = (id) =>{   
        console.log('deleted');
        setItems((oldItems) =>{
            return oldItems.filter((arrElem, index) => {
               return index !== id;
            })
        })
    }

    return(
        <>
        <div className = 'main__div'>
            <div className = 'center__div'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type = 'text' placeholder = 'Add a items' onChange = {itemEvent} value = {inputList} />
                <button onClick = {listofItem}> + </button>
                <ol>
                    {/* <li>{inputList}</li> */}
                   { Items.map((itemval, index) =>{
                        return<ToDoLists 
                        key = {index}
                        id = {index}
                        text = {itemval} 
                        onSelect =  {deleteItems}
                        />;
                    })}
                </ol>
            </div>
        </div>
        </>
    )
};

export default App;