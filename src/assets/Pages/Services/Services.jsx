import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div>
        <div>
            <p>This is a services page</p>
        </div>
      <div className="grid grid-cols-3 gap-6">
        {services?.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
