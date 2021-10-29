import React, { useState } from 'react'
import { coldata } from './Pdata'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
function Searchasset({ sdata }) {
const [active, setactive] = useState('sales')

    return (
        <div className="searchone">
            <div className="filbtn">

                
                <a href="/search"><button className={active === "auction" ? "exactive" : null}>collections</button></a>
                <button href="/" className={active === "sales" ? "exactive" : null}  >Assets</button>
            </div>
            <div className="explore explorecaro">
                <div className="container px-1">
                    <h2 style={{ color: 'white', fontSize: 35 }}>Search.. {sdata}</h2>

                    <div className="filbtn">
                    </div>

                    <div className="row py-5">

                        {
                            coldata?.map((val) => {
                                return <div className="col-md-3 col-12 my-2">
                                    <div className="excard px-2">
                                        <div className="excardimg">
                                            {
                                                val ?

                                                    <img src={`https://ipfs.infura.io/ipfs/${val ? val[6] : null}`} className="img-fuild" alt="ll" />
                                                    : null}

                                        </div>
                                        <div className="excarddetail">
                                            <p>{val ? val[2] : null}</p>
                                            <p>{val ? val[3] : null}</p>
                                            {/* <p>10.52WAX</p> */}

                                        </div>
                                        <div className="excardbtn">

                                            {/* <NavLink to={`/savenft/${val?val[0]:null}`} ><button className="one">Detail</button></NavLink> */}
                                            <Link to={{
                                                pathname: `/savenft/${val ? val[0] : null}`,
                                                state: val ? val : null
                                            }} style={{ fontSize: '15px' }}><button className="one">Details</button></Link>
                                            {/* <button className="two">Buy</button> */}
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Searchasset
