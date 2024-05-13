import PropTypes from "prop-types";

function CompanyCard({ company }) {
  const { name, img, description } = company;
  console.log(company);
  return (
    <>
      <div className="p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
        <img src={img} alt="" className=" rounded-md h-24 w-36" />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-100">{description.slice(0, 200)}</p>
      </div>
    </>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.object,
};

export default CompanyCard;
