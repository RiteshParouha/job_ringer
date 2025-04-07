import NavBar from "./NavBar";
import { JOBS } from "../utils/constant";
import Card from "./Card";

const HomePage = () => {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Bhopal",
    "Indore",
    "Nagpur",
    "Patna",
    "Coimbatore",
    "Kochi",
    "Visakhapatnam",
    "Vadodara",
    "Thiruvananthapuram",
  ];
  const experience = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+10"];
  const salaries = ["0-3 Lacs", "3-6 Lacs", "6-9 Lacs", "9-12 Lacs"];
  return (
    <div>
      <NavBar />

      <section className="h-[4.5rem] bg-gradient-to-r from-[#27dadb] to-[#001b85] flex justify-between items-center px-[1rem]">
        <h2 className="text-xl font-bold text-white">Search Job</h2>
        <form className="flex justify-between items-center w-[90%]">
          <input
            type="text"
            className="w-[30%] h-[2rem] rounded-md bg-white text-base font-semibold"
            placeholder="Type keyword."
          />
          <select className="w-[15rem] h-[2rem] rounded-md bg-white px-[0.3rem]">
            {cities.map((city) => {
              return <option key={city}>{city}</option>;
            })}
          </select>
          <select className="w-[15rem] h-[2rem] rounded-md bg-white px-[0.3rem]">
            {experience.map((exp) => {
              return (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              );
            })}
          </select>
          <select className="w-[15rem] h-[2rem] rounded-md bg-white px-[0.3rem]">
            {salaries.map((salary) => {
              return (
                <option key={salary} value={salary}>
                  {salary}
                </option>
              );
            })}
          </select>
          <button className="rounded-md h-[2.5rem] px-[5px] bg-[#ffd52c] hover:bg-[#337ab7] hover:cursor-pointer">
            Search
          </button>
        </form>
      </section>

      <section className="w-full flex gap-[1rem]">
        <div className="flex-1">left Ele</div>
        <div className="flex-1">
          <div>Filter</div>\
          <div>
            {JOBS.map((job) => {
              return <Card cardDetail={job} />;
            })}
          </div>
        </div>
        <div className="flex-1">Right Ele</div>
      </section>
    </div>
  );
};

export default HomePage;
