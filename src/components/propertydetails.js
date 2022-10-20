import React from "react";
import { Link } from "react-router-dom";
import "../css/propertydetails.css"
const Properties = ()=> {
    const data = ["Plot", "House", "Flat"]
    const data1 = ["1 Year", "2 Year", "3 Year"]
    const data2 = ["Yes", "No"]
    const data3 = ["Owned"]
    const data4 = ["Yes", "No"]
    const data5 = ["Yes", "No"]
    const data6 = []
    const data7 = []
    const data8 = []
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
                    <button className="btn2"> <span><i className="fa-regular fa-circle-2"></i></span>
                    <span>Property Detail</span></button>
                   
                </div>
                <div className="similar-button">
                    <span><i className="fa-regular fa-circle-3"></i></span>
                    <span>General Info</span>
                </div>
                <div className="similar-button">
                    <span><i className="fa-regular fa-circle-4"></i></span>
                    <span>Location Info</span>
                </div>
            </div>
            <div className="details-section">

                <div className="details-section-left">
                    <div className="details-section-left1">
                        <div><label>Length</label></div>
                        <div>
                            <input type="number"/>
                        </div>
                    </div>
                    <div className="details-section-left1">
                        <div><label>Total Area</label></div>
                        <div>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="details-section-left1">
                        <div><label>No Of BHK</label></div>
                        <div>
                            <input list="data" placeholder="Select No Of BHK" />
                            <datalist id="data">{data.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-left1">
                        <div><label>Attached</label></div>
                        <div>
                            <input list="data1" placeholder="Select Attached"/>
                            <datalist id="data1">{data1.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-left1">
                        <div><label>Furnished</label></div>
                        <div>
                            <input list="data2" placeholder="Select Furnished"/>
                            <datalist id="data2">{data2.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-left1">
                        <div><label>Lift</label></div>
                        <div>
                            <input list="data3" placeholder="Select Lift"/>
                            <datalist id="data3">{data3.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-left1">
                        <div><label>Facing</label></div>
                        <div>
                            <input list="data4" placeholder="Select Facing"/>
                            <datalist id="data4">{data4.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>

                </div>
                <div className="details-section-right">
                    <div className="details-section-right1">
                        <div><label>Breadth</label></div>
                        <div>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="details-section-right1">
                        <div><label>Area Unit</label></div>
                        <div>
                            <input list="data5" placeholder="Area Unit" />
                            <datalist id="data5">{data5.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-right1">
                        <div><label>NO Of Floor</label></div>
                        <div>
                            <input list="data6" placeholder="Select NO Of Floor" />
                            <datalist id="data6">{data6.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-right1">
                        <div><label>Western Toilet</label></div>
                        <div>
                            <input list="data7" placeholder="Select Western Toilet" />
                            <datalist id="data7">{data7.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-right1">
                        <div><label>Car Parking</label></div>
                        <div>
                            <input list="data8" placeholder="Select Car Parking" />
                            <datalist id="data8">{data8.map((op, i) => <option key={i}>{op}</option>)}</datalist>
                        </div>
                    </div>
                    <div className="details-section-right1">
                        <div><label>Electricity</label></div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>

                </div>
                <div>
                    <span><Link to="./basicinfo"><button className="cancel">previous</button></Link></span>
                    <span><Link to="./generalinfo"><button className="save">save & continue</button></Link></span>
                </div>
            </div>

        </div>

    </div>

</div>
)
}
export default Properties;