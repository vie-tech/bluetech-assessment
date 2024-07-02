import React, { useState } from "react";
import logo from "../assets/logo.png";
import bell from "../assets/notification.png";
import photo from "../assets/profile.png";
import arrow from "../assets/arrow.png";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search and filter submission logic
  };

  return (
    <nav className="w-full p-5 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="" className="w-[200px]" />
          <input
            type="text"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none font-primary"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <form
            className="flex items-center"
            onSubmit={handleSubmit}
          >
            <div className="border-2">
            <select
              name="filter"
              className=" focus:outline-none text-sm font-primary p-3"
              placeholder="Filter"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="" disabled hidden>
                Filter
              </option>
              <option value="FragranceX">FragranceX</option>
              <option value="FragranceNet">FragranceNet</option>
              <option value="Morris Costumes">Morris Costumes</option>
            </select>
            <Button
              type="submit"
              sx={{
                color: "black",
                
                
                "&:hover": {
                  color: "gray",
                },
              }}
            >
              <SearchIcon fontSize="small" />
            </Button>
            </div>
           
          </form>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <img src={bell} alt="bell-icon" />
          <img src={photo} alt="photo-icon" />
          <span>Deko</span>
          <img src={arrow} alt="arrow-icon" />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4">
          <form
            className="flex flex-col items-start space-y-4"
            onSubmit={handleSubmit}
          >
            <select
              name="filter"
              className="border-2 focus:outline-none text-sm font-primary p-3 w-full"
              placeholder="Filter"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="" disabled hidden>
                Filter
              </option>
              <option value="FragranceX">FragranceX</option>
              <option value="FragranceNet">FragranceNet</option>
              <option value="Morris Costumes">Morris Costumes</option>
            </select>
            <Button
              type="submit"
              sx={{
                backgroundColor: "blue",
                color: "white",
                padding: "4px",
                height: "45px",
                width: "45px",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              <SearchIcon fontSize="small" />
            </Button>
          </form>

          <div className="flex flex-col items-start space-y-4 mt-4">
            <img src={bell} alt="bell-icon" />
            <img src={photo} alt="photo-icon" />
            <span>Deko</span>
            <img src={arrow} alt="arrow-icon" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
