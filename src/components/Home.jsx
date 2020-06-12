import React, {useState} from 'react'
import useForm from '../hooks/useForm'


const Home = () => {
  const [form, handleInput] = useForm()
  const [list, setList]=useState([])

  const addTask = () =>{
    setList([...list, form])
  }
  const deleteTask = (i) =>{
    const dos = i
    setList(prevState => {
                        return prevState.filter((e,i) => i !== dos)
                      })
  }
  const completeTask = (i) =>{
    document.getElementById(`task`+i).style.color = "red"
  }
  console.log(list)
  return (
    <div>
      <h1>TODO LIST</h1>
      
        <ul>
        {
          list.map((e,i) =>{
            return(
              <li key={i} id={'task'+i}>{e.task} <button onClick={()=>deleteTask(i)}>Delete</button> <button onClick={()=>completeTask(i)}>Complete</button></li>
            )
          })
        }
        </ul>
      


      <div>
      <label htmlFor="Task">Task</label>
      <input type="text" name="task" id="task" onChange={handleInput} />
      <button onClick={addTask}>Add</button>
      </div>
    </div>
  )
}

export default Home