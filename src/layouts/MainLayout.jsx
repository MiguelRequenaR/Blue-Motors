import NavBar from "../components/NavBar";
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};