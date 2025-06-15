// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [message, setMessage] = useState({
//     text: "",
//     id: "",
//   });
//   const [list, setList] = useState([]);
//   const [edit, setEdit] = useState({id : "" , isEditing: false})

//   const changeMessage = (e) => {
//     setMessage({
//       ...message,
//       text: e.target.value,
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     let newTodo = {
//       text: message.text,
//       id: new Date().getTime().toString(),
//     };
//     setList([...list, newTodo ]);
    
//     setMessage({ text:"", id:""})
//   };

//   const handleDelete=(id) =>{
//       let filterItem = list.filter((item)=>{
//         return item.id !== id
//       })
//       setList(filterItem)
//   }

//   const changeEdit=(id)=>{
//     setEdit({...edit,
//       isEditing:true,
//       id:id
//     })
//     let newInput = list.find((eachItem)=>{
//       return eachItem.id === id
//     })
//     console.log(newInput)
//     setMessage({
//       ...message, text: newInput.text, id : newInput.id
//     })
//   }

//   const mainEdit = (e)=>{
//     e.preventDefault()
//     let newTodo = list.map((eachItem)=>{
//       if(eachItem.id === edit.id){
//         return {
//           text: message.text,
//           id : edit.id
//         };
       
//       } else{
//         return eachItem
//       }

//     })
//     setList(newTodo)
//     setEdit({isEditing:false})
//     setMessage({text:"", id:""})

//   }

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleClick}>
//           <h1 className="heading">TodoList App</h1>

//           <input
//             type="text"
//             placeholder="Enter a value"
//             value={message.text}
//             onChange={changeMessage}
//           />
//           {
//             edit.isEditing ? <button onClick={mainEdit}>Edit</button> : <button>Add</button>
//           }
          
//         </form>
//         <hr />

//         <ul>
//           {list.map((eachItem) => {
//             const { text, id } = eachItem;
//             return (
//               <li key={id}>
//                 <span>{text}</span>
//                 <button onClick={()=>changeEdit(id)}>Edit</button>
//                 <button onClick={()=>handleDelete(id)}>Delete</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default App;


import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [message,setMessage]=useState({
    text:"",
    id:""
  })

  const [list,setList] = useState([])

  const [editing, SetEditing] = useState({
    id:"",
    isEditing:false
  })

  const changeTodo =(e)=>{
    setMessage({
      ...message, text: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTodo = {
      text: message.text,
      id : new Date().getTime().toString()
    }
    console.log(newTodo)
    setList([...list,newTodo])
    setMessage({text:"", id:""})
  }

  const handleDelete=(id)=>{
    let filterItem = list.filter((eachItem)=>{
      return eachItem.id !== id
    })
    setList(filterItem)
  }

  const handleEditItem = (id)=>{
      SetEditing({isEditing:true, id:id})

      const finding = list.find((eachItem)=>{
        return eachItem.id ===id
      })
      setMessage({...message,text:finding.text, id:finding.id})
  }

  const handleEdit = (e) => {
       e.preventDefault()
       let allList = list.map((eachItem)=>{
         
          if(eachItem.id === editing.id){
            return ({
              text : message.text,
              id : editing.id
            })

          }else{
            return eachItem
          }
        
       }) 
       setList(allList)
       setMessage({text:""})
       SetEditing({isEditing:false})
  }

  return (
    <div>
      <h2 className='heading'>TodoList App</h2>
      <form>
        
        <input type='text' placeholder='Enter the value' value={message.text} onChange={changeTodo}/>
       {
        editing.isEditing ? <button onClick={handleEdit}>Edit</button> :  <button onClick={handleSubmit}>Add</button>
       }
       
      </form>
      <hr/>

      {
        list.length===0 && <h4>There is no item</h4>
      }
<ul>
      {
        list.map((eachItem)=>{
          const {id,text}=eachItem
          return <li key={id}>
            <span>{text}</span>
            <button onClick={()=>handleEditItem(id)}>Edit</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
          </li>
        })
      }

</ul>
    </div>
  )
}

export default App

