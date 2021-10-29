import React, { useEffect, useState } from 'react'

import { NavLink} from 'react-router-dom';
import Adata from './Assetdata'
import Nftsavecard from './Nftsavecard';
import { BsPlus } from "react-icons/bs";
import Nftasssavecard from './Nftasssavecard';
function Assetsadd({id,data,total,check,spin}) {
    const userid = JSON.parse(localStorage.getItem(`useridnft${id}`))
    const getlist =userid? userid.length?userid[userid.length-1]:null:null
    const userdataa = JSON.parse(localStorage.getItem(`${getlist}nft${id}`))
    console.log('getid',id)
    console.log('getidlidtl',getlist)
    console.log('getidlidtdata',userdataa)
    const [accountid,setaccountid] = useState()
    useEffect(async()=>{
        const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        setaccountid(accounts1[0].toLowerCase())   
    },[])
    console.log('card',check[1].toLowerCase())
    console.log('userid',accountid)
    return (
        <div className="nftcreator">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12 headingl">

                        
                        <h3 style={{fontSize:'30px'}}>Assests</h3>

                    </div>
                    <div className="col-md-4 col-12 headingr">

                    </div>

                </div>
                <div className="row">
                    {
                        check[1].toLowerCase()===accountid?<div className="col-12 col-md-3 mb-3">
                        <div className="nftcard">
                            <NavLink to={`/createasset/${id}`}>
                                <div className="mnftcard">
                                    <BsPlus />
                                    <h3 style={{fontSize:'25px'}}>Mint New <br /> Asset</h3>


                                </div>

                            </NavLink>

                        </div>
                    </div>:null
                    }
                    
                    <Nftasssavecard data={data} extradata={userdataa} spin={spin} check={check} total={total} id={id} type="asset" /> 
                    </div>
                    </div> 
                    </div>
    )
}

export default Assetsadd
