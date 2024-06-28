import { useState } from "react";
import SimpleButton from "../buttons";
import { scrollToSection } from "../../functions/navigator";

const MobileNavbar = ({ setter }: { setter: (value: any) => void }) => {
  return (
    <div className="flex flex-col gap-10 pt-10 fixed inset-0 z-50 bg-black bg-opacity-90">
      <div className="flex justify-end mr-4">
        {" "}
        <img
          onClick={() => setter(false)}
          src="/imgs/close.png"
          className="w-4"
          alt="logo"
        ></img>
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("event-schedule");
          setter(false);
        }}
        href="/#event-schedule"
        className="font-bold ml-8"
      >
        Event Schedule
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("speakers");

          setter(false);
        }}
        href="/#speakers"
        className="font-bold ml-8"
      >
        Speakers
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("testimonials");

          setter(false);
        }}
        href="/#testimonials"
        className="font-bold ml-8"
      >
        Testimonials
      </a>
      <a href="/#join-our-community" className="font-bold ml-8">
        Join Our Community
      </a>
      <img src="/imgs/logo.jpg" className="w-56 mt-auto animate-bounce mb-4" />
    </div>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <div className="flex z-10 w-auto sticky top-0 py-4 px-4 lg:px-8 justify-between items-center bg-black">
        <img src="/imgs/logo.jpg" alt="site logo" className="w-32" />
        <div className="flex gap-5 max-lg:hidden font-semibold page-links">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("event-schedule");
            }}
            href="/#event-schedule"
          >
            Event Schedule
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("speakers");
            }}
            href="/#speakers"
          >
            Speakers
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("testimonials");
            }}
            href="/#testimonials"
          >
            Testimonials
          </a>
          <a href="/#join-our-community">Join Our Community</a>
        </div>
        <SimpleButton
          linkText="https://chat.whatsapp.com/JGQnks1gWcV9YNRvrb5yqW"
          className="max-w-64 w-full max-lg:hidden"
          buttonText="Become a Volunteer"
        />
        {!isActive && (
          <svg
            onClick={() => setIsActive(true)}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="lg:hidden text-2xl font-semibold cursor-pointer text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        )}
      </div>

      {isActive && <MobileNavbar setter={setIsActive} />}
    </>
  );
};

export default Navbar;
