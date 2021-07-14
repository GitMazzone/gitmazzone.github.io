// https://github.com/briancodex/react-sidebar-v1/blob/master/src/components/Navbar.js
import logo from "img/logo.webp";

export default function Nav() {
  const handleMenuClick = () => {
    console.log("clicked!");
  };

  return (
    <nav className="sticky top-0 z-50 w-screen p-3 bg-ciBrown-light">
      <img src={logo} alt="logo" className="w-32 m-auto" />

      {/* Mobile nav menu pulldown graphic */}
      {/* TODO: animate dropdown, slide up, icon to close */}
      {/* TODO: on scroll down past X, shrink topnav until scroll up by Y */}
      <svg
        className="m-auto mt-5 md:invisible"
        onClick={handleMenuClick}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="14" rx="8" fill="#4B4132"></rect>
        <rect
          x="7.5"
          y="25"
          width="85"
          height="14"
          rx="8"
          fill="#4B4132"
        ></rect>
        <rect x="20" y="50" width="60" height="14" rx="8" fill="#4B4132"></rect>
      </svg>
    </nav>
  );
}
