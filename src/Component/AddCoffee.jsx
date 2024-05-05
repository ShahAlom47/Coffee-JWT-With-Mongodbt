import axios from "axios";
import Navbar from "./Navbar";


const AddCoffee = () => {


    const handelAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const coffeeData = { name, photo, chef, supplier, test, category, details };
        console.log(coffeeData);


        // fetch('http://localhost:3000/coffee', {

        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(coffeeData),
        // })
        // .then(res => res.json())
        //     .then(data => {
        //         if (data.data.insertedId) {
        //             alert('added successfully')

        //         }

        //     })

        axios.post('http://localhost:3000/coffee', coffeeData)
        .then(data => {
                    if (data.data.insertedId) {
                        alert('added successfully')
    
                    }
    
                })
          .catch(function (error) {
            console.log(error);
          });

            



    }






    return (
        <div>
            <Navbar></Navbar>
            <h1 className=" text-2xl text-center my-4 "> Add Coffee</h1>
            <hr />
            <p className=" w-8/12 m-auto text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium harum necessitatibus qui porro repellendus sunt odio a,!</p>
            <hr />

            <div>

                <div className="hero  bg-base-200">
                    <div className="hero-content ">

                        <div className="card  w-full  shadow-2xl bg-base-100">
                            <form className="card-body " onSubmit={handelAddCoffee}>
                                <div className="row flex gap-4">
                                    <div className="form-control ">
                                        <input type="text" placeholder="name" name="name" className="input input-bordered p-4 h-4 " required />
                                    </div>
                                    <div className="form-control ">
                                        <input type="text" placeholder="Chef" name="chef" className="input input-bordered p-4 h-4 " required />
                                    </div>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="form-control ">
                                        <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered p-4 h-4 " />
                                    </div>
                                    <div className="form-control ">
                                        <input type="text" placeholder="Test" name="test" className="input input-bordered p-4 h-4 " required />
                                    </div>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="form-control ">
                                        <input type="text" placeholder="Category" name="category" className="input input-bordered p-4 h-4 " />
                                    </div>
                                    <div className="form-control ">
                                        <input type="text" placeholder="Details" name="details" className="input input-bordered p-4 h-4 " />
                                    </div>
                                </div>

                                <div className="form-control ">
                                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered p-4 h-4 " required />
                                </div>



                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Add Coffe" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;