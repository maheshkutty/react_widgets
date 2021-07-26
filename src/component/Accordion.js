import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const accordion = items.map((item, index) => {
        const activeAcc = activeIndex == index? "active": "";
        return <div className="ui styled accordion" key={index} onClick={() => onTitleClick(index)}>
                <div className = {`${activeAcc} title`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className= {`${activeAcc} content`}>
                    {item.content}
                </div>
        </div>
    }) 

    return (
        <div className="ui segment">
            {accordion}
        </div>
    )
}

export default Accordion;