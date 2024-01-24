import React from "react";
import "../style/IconLink.css"

const IconLink = ({ span, src, alt, className, href, target }) => {
    return (
        <a href={href} target={target} className="link">
            {span}
            <img
                className={className}
                src={src}
                alt={alt}
            />
        </a>
    );
};

export default IconLink;
