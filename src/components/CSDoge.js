import React, { useEffect, useState } from 'react'
import { BsPlus } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Dsdogelist from './Dsdogelist';

function CSDoge() {  
    const [accountid,setaccountid] = useState() 
    useEffect(async()=>{
        const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setaccountid(accounts1[0]?.toLowerCase() )

    },[]) 
    const ownid = "0xcf02a6293aef1b5684af8b0e73c5c5b2b92c6f7f"
    console.log(accountid)
    console.log('own',ownid)
    return (
        <div className="nftcreator">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12 headingl">
                        
                            <h2>Create CSDoge</h2>
                       
                            
                        
                        

                    </div>
                    <div className="col-md-4 col-12 headingr">
                        

                    </div>

                </div>
                <div className="row mt-3">
                    
                  
                      <div className="col-12 col-md-3">
                        <div className="nftcard">
                           <NavLink to="/csdogecreate">
                                <div className="mnftcard">
                                    <BsPlus />
                                    <h3>Create New <br /> CSDoge</h3>


                                </div>
                                </NavLink>

                            

                        </div>
                        
                    </div>
                 
                    
                    
                    <Dsdogelist/>
                    
                    

                </div>
                
            </div>
 
        </div>
    )
}

export default CSDoge
