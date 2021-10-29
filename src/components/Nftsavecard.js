import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
function Nftsavecard({ data, type,total, newdata,spin }) { 
    
    


    return ( 
        <>
         {spin?
                        data.length?null:
                        <div style={{display:'flex',justifyContent:"center"}}>
                            <Spinner animation="border" variant="light" />

                        </div>:null
                         
                    }
            {
                data ?
                    data.map((val, index) => {
                        return <div className="col-md-3 ">
                          {
                              val?
                          

                            <div className="savenftcard">
                                <div className="savemnftcard">
                                    <div className="img">
                                        <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} alt="img1" className="img-fluid" />
                                    </div>
                                    <div className="carddetails">
                                        <p>{val?val[2]:null}</p>
                                        <div className="card_btn">
                                            {
                                                type === "nftcard" ?
                                                <Link to={{
                                                    pathname:`/savenft/${val?val[0]:null}`,
                                                    state:val?val:null
                                             }} style={{fontSize:'15px'}}><button className="detailbtn">View Collection</button></Link>
                                                 : null
                                            }
                                            {
                                                type === "asset" ? <NavLink style={{ fontSize: '15px' }} to={`/assetdetail/${val.id}`} ><button className="detailbtn">View Asset</button></NavLink> : null
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>:null
                            }
                        </div>
                    })


                    : null
            }
            
        </>


    )
}

export default Nftsavecard
