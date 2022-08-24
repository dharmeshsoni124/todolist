import "./sidenavbar.css"
import { Link } from "react-router-dom";
import Logout from "./Logout";






const SideNavBar = () => {
   
   
    return (
        
            <div className="nav-container">
                
                    <nav className="nav">
                    <div className="user-name">
                        username
                    </div>
                   
                    </nav>
                        <Link to ="/addtodo">
                        <button  type="submit" className="add-new">Add New Activity</button>
                        </Link>
                    <div>
                    <div className="todo">
                    <div className="list1">To do List</div>
                    <div className="list3"> History</div>
                    <button  className="list4"onClick={Logout}>Logout</button>
                    </div>
                    
      <table className="table">
         <tr className="table-row">
            <th className="table-head">Activity</th>
            <th className="table-head">Status</th>
            <th className="table-head">Time taken(Hrs :Min :Sec)</th>
            <th className="table-head">Action</th>
         </tr>
         
      </table>
                    </div>
                    
                </div>
               
            

        
    )
}
export default SideNavBar;