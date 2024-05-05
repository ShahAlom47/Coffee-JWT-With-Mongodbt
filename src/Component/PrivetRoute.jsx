import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    console.log(user);

if(loading){
    return (
        <div className="text-red-600 text-4xl my-4 text-center">
           Loading.....
        </div>   
    ); 
}

    if(user){  
    return (
        <div>
            {children}
        </div>   
    );   
}
return(
    <Navigate to={'/login'} state={location.pathname}> </Navigate>
)

};

export default PrivetRoute;