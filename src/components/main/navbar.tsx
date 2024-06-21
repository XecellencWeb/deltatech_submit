import SimpleButton from "../buttons";

const Navbar = () => {
  return (
    <div className="flex z-10 w-auto sticky top-0 py-4 px-8 justify-between items-center bg-black">
      <img src="/imgs/logo.jpg" alt="site logo" className="w-32" />
      <div className="flex gap-5 max-lg:hidden font-semibold">
        <a href="/#event-schedule">Event Schedule</a>
        <a href="/#speakers">Speakers</a>
        <a href="/#testimonials">Testimonials</a>
        <a href="/#join-our-community">Join Our Community</a>
      </div>
      <SimpleButton className="max-w-64 w-full max-lg:hidden" buttonText="Become a Volunteer" />
      <svg
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
    </div>
  );
};

export default Navbar;
