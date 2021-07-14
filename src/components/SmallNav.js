// https://github.com/briancodex/react-sidebar-v1/blob/master/src/components/Navbar.js
import logo from "img/logo.webp";

export default function SmallNav() {
  const handleMenuClick = () => {
    console.log("clicked!");
  };

  return (
    <nav className="sticky top-0 z-50 w-screen p-3 bg-ciBrown-light flex justify-between items-center shadow-md">
      <img src={logo} alt="logo" className="w-20" />

      {/* Mobile nav menu pulldown graphic */}
      {/* TODO: animate dropdown, slide up, icon to close */}
      {/* TODO: on scroll down past X, shrink topnav until scroll up by Y */}
      <svg
        className="md:invisible"
        onClick={handleMenuClick}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="14" rx="8" fill="#4B4132"></rect>
        <rect y="25" width="100" height="14" rx="8" fill="#4B4132"></rect>
        <rect y="50" width="100" height="14" rx="8" fill="#4B4132"></rect>
      </svg>
    </nav>
  );
}
