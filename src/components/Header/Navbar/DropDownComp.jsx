import React from 'react'
import image1 from "../../../assets/block.png";
import "./Dropdown.css"

const DropDownComp = ({ techName }) => {
    return (
        <>
            <div className='col-2'>
                <img src={image1} className="img-thumbnail imgStyle" alt="image1" height="100px" width="150px" />
                <p className='dropDownTechName'>{techName}</p>
            </div>
        </>
    )
}

export default DropDownComp