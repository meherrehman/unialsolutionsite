import React from 'react'
import "./Solutions.css"
import SolutionsComp from './SolutionsComp'

const Solutions = () => {
    return (
        <>
            <div className="container-fluid mb-3 solutionsContainer">
                <div className="container">
                    <div className='Heading'>Solutions We Deliver</div>
                    <p>We IT-enable all kinds of B2B, B2C interactions and internal operations.</p>
                    <div className="row">
                        <div className="col d-flex justify-content-around flex-wrap text-center">
                            <SolutionsComp innerText="Enterprise applications" />
                            <SolutionsComp innerText="ERP" />
                            <SolutionsComp innerText="CRM" />
                            <SolutionsComp innerText="HR Softwares" />
                            <SolutionsComp innerText="eLearning Software" />
                            <SolutionsComp innerText="eCommerce" />
                            <SolutionsComp innerText="Mobile Apps" />
                            <SolutionsComp innerText="Collaboration and Productivity Solutions" />
                            <SolutionsComp innerText="Fleet management software" />
                            <SolutionsComp innerText="Data Analytics" />
                            <SolutionsComp innerText="Web Portals" />
                            <SolutionsComp innerText="ITSM" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solutions