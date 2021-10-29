import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import nft from '../abi/nft.json'
import { NavLink,useLocation,Link } from 'react-router-dom'
function Dsdogelist() {
    const [allfixed, setallfix]=useState([])
    useEffect(()=>{
        nftidnew()

    },[])
    const nftidnew = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.csdogenft().call({ from: userwalletaddresss })
                .then((id) => {
                    console.log(id);
                    var listlen = id?.length
                    // console.log('bn',length[0])
                    for (let i = 0; i < listlen; i++) {
                        // console.log(`akk${i}`,length[0][i])
                        console.log(id[i])
                        nftinfo(id[i])
                        
                    }
                })
                .catch()
        }
    }
    const nftinfo = async (id) => {
        // console.log('4')
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.nftinformation(id).call({ from: userwalletaddresss })
                .then((fees) => {
                    // console.log(`detail${id}`,fees);
                    // setspin(fees)
                    savelist(fees)
                    // localStorage.setItem(`buylist${id}`, JSON.stringify(fees))
                    // setArr(id)
                    // salenftprie(fees[0])
                    console.log(fees)


                }).catch()

        }
    }
    const savelist =(data)=>{
        setallfix((old)=>[
            ...old,data
        ])


    }
    console.log('all',allfixed)
    return (
        <>
            { 
                     allfixed?
                     allfixed.map((val,index)=>{
                         return <>{val===null?null:   <div className="col-md-3 ">
                
                 
                         <div className="savenftcard">
                             <div className="savemnftcard">
                                 <div className="img">
                                     <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} alt="img1" className="img-fluid" />
                                 </div>
                                 <div className="carddetails">
                                     <p>{val?val[3]:null}</p>
                                     <div className="card_btn">
                                        
                                         <Link to={{
                                                pathname:`/assetdetail/${val?val[0]:null}`,
                                                state:val
                                            }} style={{fontSize:'15px'}}><button className="detailbtn">View Asset</button></Link>
                                         
                                         
                                         
                                         

                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>}
                     </>
                     })
 
            
                     :null
                         }
        </>
    )
}

export default Dsdogelist
