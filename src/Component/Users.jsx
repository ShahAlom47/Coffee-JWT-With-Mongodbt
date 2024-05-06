import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider";
import useAxiosSecure from "../CustomHocks/useAxiosSecure";


const Users = () => {
    const {user}=useContext(AuthContext);
   console.log(user.email);
    const [users,setUsers]=useState([])
    const axiosSecure = useAxiosSecure();

   useEffect(()=>{
    if(user){
        axiosSecure.get(`/user/${user?.email}`)
    .then(res=>{
        setUsers(res.data)
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    });

    }
    
   },[user,axiosSecure])



    const handelUserDelete=(id)=>{
     
        fetch(`http://localhost:3000/user/${id}`,
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(res=>res.json())
        .then(data=>{
          
            if(data.deletedCount>0){
               const updatedUser =  users.filter(user=>user._id!==id)
               setUsers(updatedUser)
                alert('deleted successfully')
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className=" text-4xl text-center my-5 font-bold">Users : {users.length}</h1>
            <hr />
            <div className="grid gap-3 grid-cols-2 p-4 ">
              {
                users.map((user,idx)=>  <div key={idx} className=" bg-slate-300 rounded-xl p-4">
                <h1 className="text-2xl my-2">User : {idx+1} </h1>
                <hr />
                <p>Name: {user?.name} </p>
                <p>Email: {user?.email} </p>
                <p>Create Time: {user?.createAt} </p>
                <p>Last Login Time: {user?.lastLogTime} </p>
                
                <div className="flex justify-end">
                    <button onClick={()=>handelUserDelete(user?._id)} className="btn btn-error">Delete</button>
                </div>
            </div>)
              }
            </div>

        </div>
    );
};

export default Users;