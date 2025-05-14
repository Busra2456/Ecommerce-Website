import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

      const [dataLength,setDataLength] = useState(6)
      const [services, setServices] = useState([]);
      useEffect(() =>{
            fetch('Ecommerce.json')
            .then(res => res.json())
            .then(data =>setServices(data))
      },[])
      return (
         <div>
            <div className="text-center mt-4 max-w-2xl mx-auto space-y-2 mb-5">
                        <h3 className="text-[#FF3811] text-2xl font-bold">Services</h3>
                        <h2 className="text-5xl font-semibold "> Our Service Area</h2>
                        <p className="font-semibold text-zinc-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {
                        services.slice(0,dataLength).map(services => <ServicesCard key={services._id} services={services} ></ServicesCard>)
                       }
                  </div>
                  <div className={dataLength === services.length ? 'hidden' :'' }>
  <button onClick={() => setDataLength(services.length)}  className=" btn bg-gradient-to-r from-[#f5502f] to-[#f02b03]
       text-white  px-40 py-8 font-semibold rounded-sm text-3xl ml-96 rounded-bl-4xl my-10 rounded-tr-4xl">Show Details</button>
  </div>
         </div>
      );
};

export default Services;