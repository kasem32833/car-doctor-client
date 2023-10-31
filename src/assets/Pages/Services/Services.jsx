import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";

const Services = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="mb-20 max-w-7xl mx-auto">
        <div className="container mx-auto ">
            <p className="text-center font-bold py-10 text-3xl">Our Services</p>
        </div>
      <div className="grid grid-cols-3 gap-6">
        {data?.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
