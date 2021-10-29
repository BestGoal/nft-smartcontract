import React from 'react'
import {data1,data2} from './Pdata'
import { NavLink,Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
function Nftasssavecard({data, type,total,extradata,id,check,spin}) { 
    console.log('lopo1',data)
    console.log('lopo2',total)
    console.log('loop3',check)
   
    return (
        <>
         
        {
            check? check[8]==="t11"?
            data1?.map((val,index)=>{
                return <>{val===null?null:   <div className="col-md-3 ">
       
        
                <div className="savenftcard">
                    <div className="savemnftcard">
                        <div className="img">
                            <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} alt="img1" className="img-fluid" />
                        </div>
                        <div className="carddetails">
                            <p>{val?val[3]:null}</p>
                            
                            <div className="card_btn">
                                {
                                    type==="nftcard"?<NavLink to={`/savenft/2`} ><button className="detailbtn">View Collection</button></NavLink>:null
                                }
                                {
                                    type==="asset"?<Link to={{
                                       pathname:`/assetdetail/${val?val[0]:null}`,
                                       state:val
                                   }} style={{fontSize:'15px'}}><button className="detailbtn">View Asset</button></Link>:null
                                }
                                
                                
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            </>
            })

            


            :check[8]==="t12"?
            data2?.map((val,index)=>{
                return <>{val===null?null:   <div className="col-md-3 ">
       
        
                <div className="savenftcard">
                    <div className="savemnftcard">
                        <div className="img">
                            <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} alt="img1" className="img-fluid" />
                        </div>
                        <div className="carddetails">
                            <p>{val?val[3]:null}</p>
                            <div className="card_btn">
                                {
                                    type==="nftcard"?<NavLink to={`/savenft/2`} ><button className="detailbtn">View Collection</button></NavLink>:null
                                }
                                {
                                    type==="asset"?<Link to={{
                                       pathname:`/assetdetail/${val?val[0]:null}`,
                                       state:val
                                   }} style={{fontSize:'15px'}}><button className="detailbtn">View Asset</button></Link>:null
                                }
                                
                                
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            </>
            })

            


            :null : null
        }
        {spin?
                        data.length?null:
                        <div className="col-md-3 "
                         style={{display:'flex',justifyContent:"center"}}>
                            <Spinner animation="border" variant="light" />

                        </div>:null
                         
                    }
        { 
                     data?
                     data.map((val,index)=>{
                         return <>{val===null?null:   <div className="col-md-3 ">
                
                 
                         <div className="savenftcard">
                             <div className="savemnftcard">
                                 <div className="img">
                                     <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} alt="img1" className="img-fluid" />
                                 </div>
                                 <div className="carddetails">
                                     <p>{val?val[3]:null}</p>
                                     <div className="card_btn">
                                         {
                                             type==="nftcard"?<NavLink to={`/savenft/2`} ><button className="detailbtn">View Collection</button></NavLink>:null
                                         }
                                         {
                                             type==="asset"?<Link to={{
                                                pathname:`/assetdetail/${val?val[0]:null}`,
                                                state:val
                                            }} style={{fontSize:'15px'}}><button className="detailbtn">View Asset</button></Link>:null
                                         }
                                         
                                         
                                         

                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>}
                     </>
                     })
 
            
                     :null
                         }
                         {/* {
                             extradata?
                             <div className="col-md-3 ">
                
                 
                         <div className="savenftcard">
                             <div className="savemnftcard">
                                 <div className="img">
                                     <img src={`https://ipfs.infura.io/ipfs/${extradata[6]}`} alt="img1" className="img-fluid" />
                                 </div>
                                 <div className="carddetails">
                                     <p>{extradata[3]}</p>
                                     <div className="card_btn">
                                         {
                                             type==="nftcard"?<NavLink to={`/savenft/2`} ><button className="detailbtn">View Collection</button></NavLink>:null
                                         }
                                         {
                                             type==="asset"?<Link to={{
                                                pathname:`/assetdetail/${extradata[0]}`,
                                                state:extradata
                                            }} style={{fontSize:'15px'}}><button className="detailbtn">View Asset</button></Link>:null
                                         }
                                         

                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>:null

                         } */}
                     </>
                     
    )
}

export default Nftasssavecard
