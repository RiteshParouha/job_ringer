// import React from 'react'

const NavBar = () => {
  const menus: string[] = ["Jobs", "Active Employers", "Job Blogs", "Pricing"];
  return (
    <header className="flex justify-between items-center px-[0.5rem]">
      <img
        src="https://www.jobringer.com/images/logonew.svg"
        alt="jobRinger"
        width="180"
      ></img>
      <section className="w-[40%] hidden lg:flex justify-between font-semibold text-sm ">
        {menus.map((menu) => {
          return (
            <button key={menu} className="hover:cursor-pointer">
              {menu}
            </button>
          );
        })}
        <button className="border-1 rounded-md h-[2.5rem] px-[5px] hover:cursor-pointer">
          Jonseeker Login
        </button>
        <button className="rounded-md h-[2.5rem] px-[5px] bg-[#ffd52c] hover:bg-[#337ab7] hover:cursor-pointer">
          Employer Login
        </button>
      </section>
      <section className="w-[50%] flex flex-col lg:hidden justify-center items-center font-semibold text-sm">
        <p>11,000+</p> <p> Active Jobs</p>
      </section>
    </header>
  );
};

export default NavBar;
