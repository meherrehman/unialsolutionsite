import React from 'react';
import "./Dropdown.css";
import image1 from "../../../assets/block.png";
import DropDownComp from './DropDownComp';

function Dropdown() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row dropDownTechBox">
                    <div className="col-2">
                        <ul class="nav nav-pills navbardropDownPills mb-4" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-All-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-Blockchain-tab" data-bs-toggle="pill" data-bs-target="#pills-Blockchain" type="button" role="tab" aria-controls="pills-Blockchain" aria-selected="false">Blockchain Development</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-Stack-tab" data-bs-toggle="pill" data-bs-target="#pills-Stack" type="button" role="tab" aria-controls="pills-Stack" aria-selected="false">Full Stack Web Development</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-Mobile-tab" data-bs-toggle="pill" data-bs-target="#pills-Mobile" type="button" role="tab" aria-controls="pills-Mobile" aria-selected="false">Full Stack Mobile App Development</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-DevOPS-tab" data-bs-toggle="pill" data-bs-target="#pills-DevOPS" type="button" role="tab" aria-controls="pills-DevOPS" aria-selected="false">DevOPS</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-Management-tab" data-bs-toggle="pill" data-bs-target="#pills-Management" type="button" role="tab" aria-controls="pills-Management" aria-selected="false">Project Management</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-Cloud-tab" data-bs-toggle="pill" data-bs-target="#pills-Cloud" type="button" role="tab" aria-controls="pills-Cloud" aria-selected="false">Cloud Technologies</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active flex-wrap" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
                                <div className="row text-start">
                                    <p className='text-start dropdown-Headings'>BlockChain Development</p>
                                    <DropDownComp techName="Ethereum Based BlockChain Development" />
                                    <DropDownComp techName="Polygon BlockChain Development" />
                                    <DropDownComp techName="Solana BlockChain Development" />
                                    <DropDownComp techName="HyperLedger Fabric" />
                                    <DropDownComp techName="Cardano Blockchain Development" />
                                    <DropDownComp techName="PinkSale Blockchain Development" />
                                    <DropDownComp techName="Binance Blockchain Deployement and Development" />
                                    <DropDownComp techName="Cosmos Blockchain development" />
                                    <DropDownComp techName="Uniswap Blockchain development" />
                                    <DropDownComp techName="Steller Blockchain development" />
                                </div>
                                <div className="row text-start mt-4">
                                    <p className='text-start dropdown-Headings'>Full Stack Web Development</p>
                                    <DropDownComp techName="World wide Laraval leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide ReactJs leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide NodeJs leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Angular leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Wordpress leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide CodeIgniter leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Python leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Javascript leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide VueJs leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Ruby leading web development services - UNIAL" />
                                </div>
                                <div className="row text-center mt-4">
                                    <p className='text-start dropdown-Headings'>Full Stack Mobile App Development</p>
                                    <DropDownComp techName="Mobile App Development with React Native" />
                                    <DropDownComp techName="NodeJs Mobile App Api Development" />
                                    <DropDownComp techName="Java Android Mobile App Development" />
                                    <DropDownComp techName="Flutter Hybrid Mobile App Development" />
                                </div>
                                <div className="row text-center mt-4">
                                    <p className='text-start dropdown-Headings'>Dev Ops</p>
                                    <DropDownComp techName="DevOps " />
                                    <DropDownComp techName="Git Lab" />
                                    <DropDownComp techName="Git Hub" />
                                    <DropDownComp techName="Jenkins DevOps" />
                                    <DropDownComp techName="Worldwide Leading NGINX Development Services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Docker Development Services - UNIAL" />
                                </div>
                                <div className="row text-center mt-4">
                                    <p className='text-start dropdown-Headings'>Project Management</p>
                                    <DropDownComp techName="Agile Project Management" />
                                    <DropDownComp techName="Jira Software Services" />
                                    <DropDownComp techName="Worldwide Leading Slack development services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Microsoft Teams development services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Discord development services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Scrum Master services - UNIAL" />
                                </div>
                                <div className="row text-center mt-4">
                                    <p className='text-start dropdown-Headings'>Cloud Technologies</p>
                                    <DropDownComp techName="AWS" />
                                    <DropDownComp techName="Worldwide Leading Google Cloud Development Services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Azure Development Services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Heroku Development Services - UNIAL" />
                                    <DropDownComp techName="Digital Ocean" />
                                </div>
                            </div>
                            <div class="tab-pane fade flex-wrap" id="pills-Blockchain" role="tabpanel" aria-labelledby="pills-Blockchain-tab" tabindex="0">
                                <div className="row text-start">
                                    <p className='text-start dropdown-Headings'>BlockChain Development</p>
                                    <DropDownComp techName="Ethereum Based BlockChain Development" />
                                    <DropDownComp techName="Polygon BlockChain Development" />
                                    <DropDownComp techName="Solana BlockChain Development" />
                                    <DropDownComp techName="HyperLedger Fabric" />
                                    <DropDownComp techName="Cardano Blockchain Development" />
                                    <DropDownComp techName="PinkSale Blockchain Development" />
                                    <DropDownComp techName="Binance Blockchain Deployement and Development" />
                                    <DropDownComp techName="Cosmos Blockchain development" />
                                    <DropDownComp techName="Uniswap Blockchain development" />
                                    <DropDownComp techName="Steller Blockchain development" />
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-Stack" role="tabpanel" aria-labelledby="pills-Stack-tab" tabindex="0">
                                <div className="row text-start">
                                    <p className='text-start dropdown-Headings'>Full Stack Web Development</p>
                                    <DropDownComp techName="World wide Laraval leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide ReactJs leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide NodeJs leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Angular leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Wordpress leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide CodeIgniter leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Python leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Javascript leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide VueJs leading web development services - UNIAL" />
                                    <DropDownComp techName="World wide Ruby leading web development services - UNIAL" />
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-Mobile" role="tabpanel" aria-labelledby="pills-Mobile-tab" tabindex="0">
                                <p className='text-start dropdown-Headings'>Full Stack Mobile App Development</p>
                                <div className="row">
                                    <DropDownComp techName="Mobile App Development with React Native" />
                                    <DropDownComp techName="NodeJs Mobile App Api Development" />
                                    <DropDownComp techName="Java Android Mobile App Development" />
                                    <DropDownComp techName="Flutter Hybrid Mobile App Development" />
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-DevOPS" role="tabpanel" aria-labelledby="pills-DevOPS-tab" tabindex="0">
                                <p className='text-start dropdown-Headings'>Dev Ops</p>
                                <div className="row">
                                    <DropDownComp techName="DevOps " />
                                    <DropDownComp techName="Git Lab" />
                                    <DropDownComp techName="Git Hub" />
                                    <DropDownComp techName="Jenkins DevOps" />
                                    <DropDownComp techName="Worldwide Leading NGINX Development Services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Docker Development Services - UNIAL" />

                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-Management" role="tabpanel" aria-labelledby="pills-Management-tab" tabindex="0">
                                <p className='text-start dropdown-Headings'>Project Management</p>
                                <div className="row">
                                    <DropDownComp techName="Agile Project Management" />
                                    <DropDownComp techName="Jira Software Services" />
                                    <DropDownComp techName="Worldwide Leading Slack development services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Microsoft Teams development services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Discord development services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Scrum Master services - UNIAL" />
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-Cloud" role="tabpanel" aria-labelledby="pills-Cloud-tab" tabindex="0">
                                <p className='text-start dropdown-Headings'>Cloud Technologies</p>
                                <div className="row">
                                    <DropDownComp techName="AWS" />
                                    <DropDownComp techName="Worldwide Leading Google Cloud Development Services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Azure Development Services - UNIAL" />
                                    <DropDownComp techName="Worldwide Leading Heroku Development Services - UNIAL" />
                                    <DropDownComp techName="Digital Ocean" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown