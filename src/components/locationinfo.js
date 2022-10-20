import React from "react";
import { Link } from "react-router-dom";
import "../css/basicinfo.css"
import "../css/locationinfo.css"
const LocationInfo = () => {
    //{ info }
    const data = ["Plot", "House", "Flat"]
    const data1 = ["1 Year", "2 Year", "3 Year"]
    const data2 = ["Yes", "No"]
    const data3 = ["Owned"]
    const data4 = ["Yes", "No"]
    const data5 = ["Yes", "No"]

    return (
        <div className="basic-info-container">

            <div className="logopage">
                <div className="logo">Logo</div>

                <div className="similar">
                    <span><i className="fa-regular fa-house"></i></span>
                    <span>Property</span>
                </div>
                <div className="similar">
                    <span><i className="fa-regular fa-bell"></i></span>
                    <span>Assistance</span>
                </div>
                <div className="similar">
                    <span><i className="fa-regular fa-download"></i></span>
                    <span>Received Interest</span>
                </div>
                <div className="similar">
                    <span><i className="fa-solid fa-arrow-up"></i></span>
                    <span>Sent Interest</span>
                </div>
                <div className="similar">
                    <span><i className="fa-regular fa-eye"></i></span>
                    <span>Property Views</span>
                </div>
                <div className="similar">
                    <span><i className="fa-regular fa-tag"></i></span>
                    <span>Tarrif Plan</span>
                </div>

            </div>

            <div className="add-new-property">

                <div className="header">
                    <div className="header-left">USER</div>
                    {/*  ID:{info.ppd}  */}
                    <div className="header-right">
                        <span><i className="fa-light fa-user"></i></span>
                        <span>Email</span>
                        {/* {info.email} */}
                    </div>
                </div>
                <hr/>

                <div className="bottom-section">
                    <div className="new-property" >ADD NEW PROPERTY</div>

                    <div className="button-section">

                        <div className="similar-button">
                            <span><i className="fa-regular fa-circle-1"></i></span>
                            <span>Basic Info</span>
                        </div>
                        <div className="similar-button">
                            <span><i className="fa-regular fa-circle-2"></i></span>
                            <span>Property Detail</span>
                        </div>
                        <div className="similar-button">
                            <span><i className="fa-regular fa-circle-3"></i></span>
                            <span>General Info</span>
                        </div>
                        <div className="similar-button">
                        <button className="btn4"><span><i className="fa-regular fa-circle-4"></i></span>
                            <span>Location Info</span></button>
                        </div>
                    </div>
                    <div className="details-section">

                        <div className="details-section-left">
                            <div className="details-section-left1">
                                <div><label>Email</label></div>
                                <div>
                                    <input type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div className="details-section-left1">
                                <div><label>Area</label></div>
                                <div>
                                    <input list="data" placeholder="Select Area"/>
                                    <datalist id="data">{data.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-left1">
                                <div><label>Address</label></div>
                                <div>
                                    <input type="text" placeholder="Address" />
                                </div>
                            </div>
                            <div className="details-section-left1">
                                <div><label>Ltittude</label></div>
                                <div>
                                    <input type="text" placeholder="Latittude"/>
                                </div>
                            </div>
                        </div>
                        <div className="details-section-right">
                            <div className="details-section-right1">
                                <div><label>City</label></div>
                                <div>
                                    <input list="data1" placeholder="Select City" />
                                    <datalist id="data1">{data1.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-right1">
                                <div><label>Pincode</label></div>
                                <div>
                                    <input list="data2" placeholder="Select Pincode" />
                                    <datalist id="data2">{data2.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-right1">
                                <div><label>Landmark</label></div>
                                <div>
                                    <input type="text" placeholder="Landmark" />
                                </div>
                            </div>
                            <div className="details-section-right1">
                                <div><label>Longittude</label></div>
                                <div>
                                    <input type="text" placeholder="Longittude" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span><Link to="./listings"><button className="previous">previous</button></Link></span>
                            <span><Link to="./listings"><button className="addproperty">add property</button></Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocationInfo;