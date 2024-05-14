import axios from "axios";
import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

function Recommanded() {
  const [companies, setaacompanies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/companies`);
      setaacompanies(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="mt-14 lg:mt-28 container mx-auto">
        <h1 className="text-2xl font-semibold text-center text-txt-color capitalize lg:text-4xl ">
          Recommanded <span className="text-btn-color">Companies</span>
        </h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {companies.map((company) => (
            <CompanyCard key={company._id} company={company} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Recommanded;
