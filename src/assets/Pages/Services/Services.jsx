import { useEffect, useState } from "react";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => consolelog(data))
    },[])


    return (
        <div>
            <p>This is a services page</p>
        </div>
    );
};

export default Services;