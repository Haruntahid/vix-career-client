function Banner() {
  return (
    <div className="pt-5 lg:pt-10 bg-bg-color">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-3">
        <div>
          <p className="text-4xl lg:text-7xl font-bold lg:leading-[80px]">
            Find the job of <br /> your{" "}
            <span className="text-btn-color">Dreams</span>
          </p>
          <p className="lg:text-xl mt-6 w-3/4">
            Find You New Job Today! New Job Postings Everyday just for you,
            browse the job you want and apply wherever you want
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/CnJmxqY/Image-herro.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
