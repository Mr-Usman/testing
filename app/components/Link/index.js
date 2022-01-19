import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ refLink, text, icon }) => {
    return (
        <Link className="btn btn-link" to={refLink}><i className={icon} />{text}</Link>
    );
}

export default LinkComponent;