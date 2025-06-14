import { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { AuthContext } from "../../../Provider/AuthProvider";


const Bookings = () => {
      const { user} = useContext(AuthContext);
      const [bookings,setBookings] = useState([]);
      

      const url = `http://localhost:5000/busing?email=${user?.email}`;

      useEffect(() =>{

            // axios.get(url, {withCredentials:true},{credentials:'include'})
            // .then(res =>{
            //       setBookings(res.data)
            // })

            fetch(url
                  // ,{credentials:'include'}
            )
            .then(res => res.json())
            .then(data => setBookings(data))
      },[url])



      const handleDelete = id => {
            const proceed = confirm('Are You Sure you Want to delete');
            if(proceed){
                  fetch(`http://localhost:5000/busing/${id}`, {
                        method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                  alert('deleted successfully');
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining)
                        }
                  })

            }
      }



      const handleBookingConfirm = id => {
            fetch(`http://localhost:5000/busing/${id}`, { method: 'PATCH',
              headers:{
                    'content-type' : 'application/json'

              },
              body: JSON.stringify({status: 'confirm'})
                    })
                    .then(res =>res.json())
                    .then(data =>{
                          console.log(data);
                          if(data.modifiedCount > 0){
                                //update state 
                                // alert('deleted successfully');
                                const remaining = bookings.filter(booking => booking._id !== id);
                                const updated = bookings.find(booking => booking._id === id)
                                
                                updated.status = 'confirm'
                                const newBooking = [updated,...remaining];
                                setBookings(newBooking)
                          }
                    })
  
              }


      return (
            <div>
                  <h2 className="text-5xl">your bookings: {bookings.length} </h2>

                  <div className="overflow-x-auto">
  <table className="table">
  <thead>
  <tr>
        <th>
        <label>
                <input type="checkbox" className="checkbox" />
              </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
  
   
      
   {
     bookings.map(booking => <BookingRow
     key={booking._id}
     booking={booking}
     handleDelete={handleDelete}
     handleBookingConfirm ={handleBookingConfirm}
     ></BookingRow>)
   }
      
      
    
  
      </thead>
  </table>
</div>
            </div>
      );
};

export default Bookings;