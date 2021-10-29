import React, { useEffect, useState } from 'react'
import { BiImageAdd, BiChevronLeft } from "react-icons/bi";
import { NavLink, useParams,useLocation ,useHistory} from 'react-router-dom';
import Pdata from './Pdata'
import { BsPlus } from "react-icons/bs";
import Assetsadd from './Assetsadd';
import Assetdetail from './Assetdetail';
import Adata from './Assetdata'
import Nftsavecard from './Nftsavecard';
import Web3 from 'web3'
import nft from '../abi/nft.json'

function Savenft() { 
    const { nftid } = useParams()
    // console.log('data', Pdata)
    const alldata = JSON.parse(localStorage.getItem('alldatauser'))
    // console.log('data', alldata) 
    const userid = JSON.parse(localStorage.getItem('userid'))
    const getlist = userid?userid.length?userid[userid.length-1]:null:null
    // console.log('assusersave',getlist)
    const userdataa = JSON.parse(localStorage.getItem(getlist))
    // console.log('aaasave',userdataa)
    const [allasset,setallasset]=useState([])
    console.log('aasssalldata',allasset)
    const [spin,setspin] = useState()
    
    const location = useLocation()
    // const mainid = 
    // const [value, setvalue] = useState()
    const history = useHistory()
    const fdata = location.state
    // console.log('aasdda',fdata)
    const [idmain, setid] = useState(0)
    const [userdata, setuserdata] = useState([])
    // console.log(userdata)
    const [newnft,setnewnft] = useState()
    const [nid,setnid] = useState()
    // console.log('filnew', newnft)
    useEffect(()=>{
        // localStorage.removeItem('totalnft')
        // setuserdata([])
        nftlist(nftid)
    },[]) 

    const nftinfo = async (id) => {
        // alert('hello3')
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.nftinformation(id).call({ from: userwalletaddresss })
                .then((fees) => {
                    console.log('nft',fees)
                    // console.log('ndftid',id)
                    localStorage.setItem(`${id}nft${nftid}`, JSON.stringify(fees))
                    setnewnft(fees)
                    setnid(id)
                    callasset(fees)
                    
                    
                }).catch()

        }
    }
    const callasset =(data)=>{
        setallasset((old)=>[
            ...old,data
        ])
    }



    const collectionnft = async (id, length) => {
        // console.log('asd',length)
        // alert('hello2')
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.collectionstored(id, length).call({ from: userwalletaddresss })
                .then((fees) => {
                    // console.log('assa',fees);
                    localStorage.setItem(`${length}idnft${nftid}`, fees)
                    
                    nftinfo(fees);
                }).catch()

        }
    }




    const nftlist = async (id) => {
        // console.log('ddd',id)
        setuserdata([])
        // alert('hello1')
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.totalnft(id).call({ from: userwalletaddresss })
                .then((length) => {
                    localStorage.setItem(`totalnft${nftid}`, length)
                    for (let i = 0; i < length; i++) {
                        collectionnft(id, i);
                        setspin(i)
                    }
                })
                .catch()

        }
    }
    const total = localStorage.getItem(`totalnft${nftid}`)
    
    
    
   
    return (
        <div className="savecreatecollection">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-12 headingl">
                     <span style={{color:'white',fontSize:'28px'}}  onClick={()=>history.goBack()}><BiChevronLeft /> Back</span>   
                        <h2>Create New Asset </h2>
                        <h3>Create your collection first. Then you’ll create your schemas and assets.</h3>

                    </div>
                    <div className="col-md-7 col-12 headingr">

                    </div>

                </div>
                <div className="row">

                    <div className="col-md-3 col-12 mb-5">
                        <div className="nftcard">


                            <label for="actual-btn">
                                <div className="mnftcard ">
                                    <img src={`https://ipfs.infura.io/ipfs/${fdata[6]}`} className="img-fluid" />
                                    <p>{fdata[3]}</p>



                                </div>
                            </label>


                        </div>

                    </div>
                    <div className="col-md-9 col-12">






                        <div className="nftcreatecard">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="displayname">
                                        <p>Display Name</p>
                                        <h3>{fdata[2]}</h3>
                                    </div>
                                    <div className="weburl">
                                        <p>Website Url</p>
                                        <h3>{fdata[4]}</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="colldes">
                                        <p>Collection Description</p>
                                        <h3>{fdata[5]}</h3>
                                    </div>
                                    {/* <div className="marketfee">
                                        <p>Market Fee</p>
                                        <h3>{fdata[7]}%</h3>
                                    </div> */}
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* create assert  */}
            
            <Assetsadd id={nftid} data={allasset} spin={spin} check={fdata} total={total} /> 
            {/* <Nftsavecard data={userdata} type="asset" /> */} 



        </div>
    )
}

export default Savenft
