
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

// or via CommonJS
// const Swal = require('sweetalert2')


const Home = () => {

const [uiUpdate,setUiUpdate]=useState('')
    const [coffeeData, setCoffeeData] = useState([]);
    useEffect(() => {

        // fetch('http://localhost:3000/coffee')
        //     .then(res => res.json())
        //     .then(data => setCoffeeData(data))

        axios.get('http://localhost:3000/coffee')
        .then(res=>{
            setCoffeeData(res.data)
        })
    }, [uiUpdate])

    console.log(coffeeData);

    const handelDeleteCoffee = (_id) => {

        console.log(_id);



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffee/${_id}`, {

                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify(coffeeData),
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount>0) {
                            Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                  });
                                  setUiUpdate('p')
                        }
                    })
             
            }
        });
    }






    return (
        <div className=" max-w-7xl m-auto p-5">
            <h1 className=" text-2xl text-center font-bold"> Coffee</h1>
            <hr />
            <div className="grid grid-cols-2 gap-5  m-5">
                {
                    coffeeData.map((data, index) => <div key={index} className="card card-side bg-base-100 shadow-xl p-2">
                        <figure className=" w-4/12"><img src={data?.photo} alt="Movie" /></figure>
                        <div className="card-body flex-1">
                            <h2 className="card-title">{data?.name}</h2>
                            <p>{data?.test}</p>

                        </div>
                        <div className="card-actions  flex-col items-start justify-between">
                            <button className="btn btn-primary bg-orange-900">Details</button>
                            <Link to={`/update-coffee/${data?._id}`}><button className="btn btn-primary bg-green-800">Edit</button></Link>
                            <button onClick={() => handelDeleteCoffee(data?._id)} className="btn btn-primary bg-red-400">Delete</button>

                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;