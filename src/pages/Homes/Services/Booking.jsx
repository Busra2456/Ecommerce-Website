import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Booking = () => {
      const service = useLoaderData();
      console.log(service);
      const {title, _id, price, img,} = service;
      const {user} = useContext(AuthContext);
      const handleBooking = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = user?.email;
            const booking = {
                  customerName : name,
                  email,
                  img,
                  date,
                  service: title,
                  service_id:_id,
                  price:price,
            }
            console.log(booking);
            fetch('http://localhost:5000/busing',{
                  method: 'POST',
                  headers:{
                        'content-type' : 'application/json'

                  },
                  body: JSON.stringify(booking)

            })
            .then(res => res.json())
            .then(data =>{
            console.log(data);
            if(data.insertedId){
                  alert('service book successfully')
            }

            })

      }
      return (
            <div className="mt-10">
            <h2 className="text-center text-3xl font-bold"> {title} </h2>

            <form
             onSubmit={handleBooking}
             >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
          
          
   <div className=" ">
  
    <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input w-full"/> 
    
   </div>
   <div>
   
   <input type="date" name="date" className="input w-full" />
   </div>
   
  
    <div>
   
    <input type="text" name="email" placeholder="email" className="input w-full" defaultValue={user?.email}  />
    
    </div>
    <div>
   
    <input type="text" placeholder="$ Price" 
    defaultValue ={'$'+price} className="input w-full"  />
   
    </div>
  
  
</div>

<div className="my-6">
      <input  className="btn btn-neutral bg-[#FF3811]  border-[#FF3811] w-full" type="submit" value="Order Confirm" />
</div>
          
            </form>
          
           

</div>
      );
};

export default Booking;