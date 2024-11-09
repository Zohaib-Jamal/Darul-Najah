import SideNavBar from "./SideNavBar";
import { Menu } from "lucide-react";

const pageName = ["Home", "About Us", "Services", "News", "Contact"];

function Header() {
  return (
    <header className="bg-white md:border w-full md:border-b-2  ">
      <div className="hidden md:flex md:flex-row md:justify-between ">
        <h1 className="text-primary_text text-xl m-5 font-semibold ">
          Darul Najah
        </h1>

        <ul className="text-primary_text flex flex-row">
          {pageName.map((name, index) => (
            <li key={index} className="m-5 text-primary_text font-medium">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex flex-row w-full items-center">
        <div className="z-50 flex">
          <SideNavBar pageName={pageName} />
        </div>

        <h1 className="text-primary_text text-3xl m-5 font-semibold ">
          Darul Najah
        </h1>
      </div>
    </header>
  );
}

export default Header;
