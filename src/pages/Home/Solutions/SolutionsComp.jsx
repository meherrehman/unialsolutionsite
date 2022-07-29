import React from 'react'

const SolutionsComp = ({ innerText }) => {
    return (
        <div className='solutionsTabs d-flex justify-content-center align-items-center'>
            <div className='solutionText'>{innerText}</div>
            <i className="fa-solid fa-arrow-down arrowIcon"></i>
        </div>
    )
}

export default SolutionsComp