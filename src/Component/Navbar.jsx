import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const {user,LogOutUser}=useContext(AuthContext)


    const handelLogOut =()=>{
        LogOutUser()
        .then(() => {
          
        }).catch((error) => {
            console.log(error);
        });

    }


    return (
        <div >
           <div className="flex "> 
           <NavLink to={'/'}><button className="btn btn-link">Home </button></NavLink>
           <NavLink to={'/add-coffee'}><button className="btn btn-link"> Add Coffee </button></NavLink>
           {/* <NavLink to={'/update-coffee'}><button className="btn btn-link"> Update Coffee </button></NavLink> */}
           <NavLink to={'/users'}><button className="btn btn-link"> Users </button></NavLink>
           <NavLink to={'/register'}><button className="btn btn-link"> Register </button></NavLink>
           <NavLink to={'/login'}><button className="btn btn-link"> Login </button></NavLink>
           <NavLink ><button onClick={ handelLogOut} className="btn btn-error"> Login </button></NavLink>
            <h1 className=" bg-slate-200 p-3 rounded-md">{user?.email}</h1>
           
           </div>
        </div>
    );
};

export default Navbar;