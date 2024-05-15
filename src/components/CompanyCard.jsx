import PropTypes from "prop-types";

function CompanyCard({ company }) {
  const { name, img, description } = company;
  console.log(company);
  return (
    <>
      <div className="p-6 rounded-md shadow-md bg-bg-color hover:bg-btn-color transition duration-300 text-txt-color">
        <img src={img} alt="" className=" rounded-md h-24 w-36" />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-txt-color">{description.slice(0, 200)}</p>
      </div>
    </>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.object,
};

export default CompanyCard;
