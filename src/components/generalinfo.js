import React from "react";
import { Link } from "react-router-dom";
import "../css/basicinfo.css"
import "../css/generalinfo.css"
const GeneralInfo = () => {
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
                        <button className="btn3"><span><i className="fa-regular fa-circle-3"></i></span>
                            <span>General Info</span></button>
                        </div>
                        <div className="similar-button">
                            <span><i className="fa-regular fa-circle-4"></i></span>
                            <span>Location Info</span>
                        </div>
                    </div>
                    <div className="details-section">

                        <div className="details-section-left">
                            <div className="details-section-left1">
                                <div><label>Property Type</label></div>
                                <div>
                                    <input list="data" placeholder="Select Property Type" />
                                    <datalist id="data">{data.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-left1">
                                <div><label>Price</label></div>
                                <div>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className="details-section-left1">
                                <div><label>Property Age</label></div>
                                <div>
                                    <input list="data1" placeholder="Select Property Age" />
                                    <datalist id="data1">{data1.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-left1">
                                <div><label>Property Description</label></div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="details-section-right">
                            <div className="details-section-right1">
                                <div><label>Negotable</label></div>
                                <div>
                                    <input list="data2" placeholder="Select Negotable" />
                                    <datalist id="data2">{data2.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-right1">
                                <div><label>Ownership</label></div>
                                <div>
                                    <input list="data3" placeholder="Select Ownership" />
                                    <datalist id="data3">{data3.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-right1">
                                <div><label>Property Approved</label></div>
                                <div>
                                    <input list="data4" placeholder="Property Approved" />
                                    <datalist id="data4">{data4.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                            <div className="details-section-right1">
                                <div><label>Bank Loan</label></div>
                                <div>
                                    <input list="data5" placeholder="Bank Loan" />
                                    <datalist id="data5">{data5.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span><Link to="./listings"><button className="cancel">cancel</button></Link></span>
                            <span><Link to="./locationinfo"><button className="save">save & continue</button></Link></span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default GeneralInfo;