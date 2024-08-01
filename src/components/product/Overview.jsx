import PropTypes from 'prop-types';

export default function Overview({ colores }) {

    return (
        <div className="space-y-10 mt-3">
            <div className="space-y-5">
                <h1>
                    Colores disponibles
                </h1>
                <hr className="border-gray-700" />
                <p className="text-sm">{colores}</p>
                <hr className="border-gray-700" />
            </div>
            <div className="space-y-5">
                <h1 className="">Características</h1>
            </div>
        </div>
    )
}

Overview.propTypes = {
    colores: PropTypes.string.isRequired
};