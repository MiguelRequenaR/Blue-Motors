import NavBar from "../components/NavBar";
import PropTypes from "prop-types";

export default function MainLayout({ children, isOpen, setIsOpen }) {
  return (
    <div>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
