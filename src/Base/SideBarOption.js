import React from 'react';
import "./SidebarOption.css"


function SideBarOption(props) {

    const { Icon, title, number, selected } = props;

    return (
        <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SideBarOption;
