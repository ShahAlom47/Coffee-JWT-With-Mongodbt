import { Link } from "react-router-dom";
import Navbar from "./Navbar";


import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase.config";

const Register = () => {
    const auth = getAuth(app);
    const { user, createUser } = useContext(AuthContext)
    console.log(user);


    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const pass = form.password.value
       



        createUser(email, pass)
            .then((userCredential) => {
                const userC = userCredential.user?.metadata?.creationTime  
                const userData = { email, pass, name ,createAt:userC};
                console.log(userC,userCredential);
              
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    
                }).catch((error) => {
                    console.log(error);
                });


                fetch('http://localhost:3000/user', {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData),
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('added successfully')

                        }

                    })



            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    return (
        <div className=" w-8/12 m-auto">
            <Navbar></Navbar>
            <h1 className=" text-2xl text-center my-4 "> Register</h1>
            <hr />
            <div className=" w-full">
                <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-full">
                    <form onSubmit={handelRegister} className="card-body w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt  ">Already have An Account <Link to={'/login'} className="btn btn-link">LogIn</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default Register;