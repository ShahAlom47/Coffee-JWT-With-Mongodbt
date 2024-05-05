import { useLoaderData} from "react-router-dom";
import Navbar from "./Navbar";


const UpdateCoffee = () => {
    const  updateData= useLoaderData()
    // const id= useParams();
    const {_id, name,test,photo,chef,details, category,supplier}=updateData; 

 

const handelEditCoffee=(e)=>{
    e.preventDefault();

    const form = e.target
    const name = form.name.value
    const chef = form.chef.value
    const supplier = form.supplier.value
    const test = form.test.value
    const category = form.category.value
    const  details= form.details.value
    const  photo= form.photo.value
    
    const coffeeData ={name,photo,chef,supplier,test,category,details};
    // console.log(coffeeData);

    fetch(`http://localhost:3000/coffee/${_id}`,{

    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify(coffeeData),
})

.then(res=>res.json())
.then(data=>{
    console.log(data);
if(data.modifiedCount>0){
alert('update successfully')

}

})


}

    return (
        <div>
            <Navbar></Navbar>
          <h1 className=" text-2xl text-center my-4 "> Update Coffee</h1>

          <hr />
          <div>
          <div className="card  w-8/12 m-auto  shadow-2xl bg-base-100">
                            <form className="card-body " onSubmit={handelEditCoffee}>
                                <div className="row flex gap-4">
                                    <div className="form-control w-full ">
                                        <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered p-4 h-4 " required />
                                    </div>
                                    <div className="form-control  w-full  ">
                                        <input type="text" placeholder="Chef" name="chef"  defaultValue={chef} className="input input-bordered p-4 h-4 " required />
                                    </div>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="form-control  w-full  ">
                                        <input type="text" placeholder="Supplier" name="supplier"  defaultValue={supplier} className="input input-bordered p-4 h-4 "  />
                                    </div>
                                    <div className="form-control  w-full  ">
                                        <input type="text" placeholder="Test" name="test"  defaultValue={test} className="input input-bordered p-4 h-4 " required />
                                    </div>
                                </div>
                                <div className="row flex gap-4">
                                    <div className="form-control  w-full  ">
                                        <input type="text" placeholder="Category" name="category"  defaultValue={category} className="input input-bordered p-4 h-4 " />
                                    </div>
                                    <div className="form-control   w-full ">
                                        <input type="text" placeholder="Details" name="details"  defaultValue={details} className="input input-bordered p-4 h-4 "  />
                                    </div>
                                </div>
                               
                                <div className="form-control   w-full ">
                                        <input type="text" placeholder="Photo URL" name="photo"  defaultValue={photo} className="input input-bordered p-4 h-4 " required />
                                    </div>



                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Update" />
                                </div>
                            </form>
                        </div>
          </div>


        </div>
    );
};

export default UpdateCoffee;