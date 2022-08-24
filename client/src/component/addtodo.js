import "./addtodo.css";
 


const Addtodo=()=>{
    return(
        <div>
         <h1>Create a To Do </h1>
         <form>
            <div>
                <label className="activity-label">Activity</label>
                <input  className="activity" type="text"/>

            </div>
            <div>
                <label className="time-label">Time-Required</label>
                <input  className="time" type="time"/>

            </div>
            
                <div>
                <button className="add-to-do">Add To Do</button>
                </div>
                
            
         </form>
        </div>
    )
}
 export default Addtodo;