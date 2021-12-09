import React,{useState} from 'react'
import EditTask from '../Modals/EditTask'

const Card = ({taskObj,index,deleteTask,updateListArray}) => {
    const [modal,setModal] = useState (false);

    const colors=[
        {
            primaryColor:"#DB2929",
            secondaryColor: "#FBE9E9	"
        },
        {
            primaryColor:"#FF7D40",
            secondaryColor: "#FFC8AE"
        },
        {
            primaryColor:"#8E8E38",
            secondaryColor: "#DDDDA8"
        },
        {
            primaryColor:"#2FAA96	",
            secondaryColor: "#A5E6DC"
        },
        {
            primaryColor:"#FF92BB",
            secondaryColor: "#E7A7BF"
        }

    ]
    const toggle = () =>{
        setModal(!modal)
    }
    const updateTask = (obj) =>{
        updateListArray(obj,index)
        
    }
    const handleDelete= () =>{
        deleteTask(index)
    }
    return (
        <div class="card " >
            <div class="card-top" style = {{backgroundColor : colors[index%5].primaryColor}}></div>
  
  <div class="card-body">
   <span class="card-header"style = {{backgroundColor : colors[index%5].secondaryColor}}>{taskObj.Name}</span>
    
    <p class="card-text">{taskObj.Description}</p>
    <div style={{position : "absolute" , right : "20px" ,bottom : "20px"}}>
    <i class="fas fa-trash-alt p-2 " style = {{color : colors[index%5].primaryColor, cursor:"pointer" , fontSize:"20px"}} onClick={handleDelete}></i>
    <i class="fas fa-edit p-2" style = {{color : colors[index%5].primaryColor,cursor:"pointer",fontSize:"20px"}}onClick={()=>setModal(true)}></i>
    </div>
  </div>
  <EditTask modal={modal} toggle={toggle} updateTask = {updateTask} taskObj={taskObj}/>
</div>
    )
}
export default Card
