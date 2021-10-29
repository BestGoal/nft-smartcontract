import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { NavLink,Link } from 'react-router-dom'
import Web3 from 'web3' 
import nft from '../abi/nft.json'
import {coldata} from './Pdata'
import Spinner from 'react-bootstrap/Spinner'
// import { NavLink } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, Lazy } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Lazy]);


function Carosel(props) {
    const [colllist, setcolllist] = useState()
    const [assetist, setassetlist] = useState()
    const [allcolllist, allsetcolllist] = useState([])
    const [active, setactive] = useState('sales')
    const [alldata,setalldata] = useState([])
    const [show,setshow] = useState(false)
    const [aldatafil, setaldatafil] = useState(alldata)
    const [result, setresult] = useState([])
    const [spi,setspin] = useState()
    const [accountid,setaccountid] = useState() 
    // useEffect(()=>{
    //     console.log('aas',props.sdata)
    //     if(props.data === "no data"){
    //         alert('data')
    //         setresult(alldata)

    //     }
    //     else{
    //         // console.log('main',ser)
    //         const fil = aldatafil.filter((c)=>{
    //            return Object.values(c).join(" ").toLowerCase().includes(props.data.toLowerCase());
    //         })
    //         // setmaindata(fil)
    //         // setresult(fil)
    //     }
    // },[props.sdata])
    console.log('alkoiu',accountid)
    useEffect(async() => {
        const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setaccountid(accounts1)
        totalcolection()

    }, [])
    const totalcolection = async () => {
        
        if (window.ethereum) {
            setshow(true)

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.collectionform().call({ from: userwalletaddresss })
                .then((length) => {
                    setcolllist(length)
                    console.log('lklength',length)
                    
                })
                .catch()

        }
    }
    useEffect(() => {
        for (let i = 1; i <= colllist; i++) {
            collectiondetails(i);
            setspin(i)
        }


    }, [colllist])
    const collectiondetails = async (id) => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.collectiondetails(id).call({ from: userwalletaddresss })
                .then((fees) => {
                    // console.log("fff", fees);
                    setactive(id)
                    getalllist(fees)


                }).catch()

        }
    }
   
    const getalllist = (data)=>{
        setalldata((old)=>[
            ...old,data
        ])


    }
    
    // console.log('alladata',aldatafil)
    




    return (
        <div className="explore explorecaro">
            <div className="container px-1">
                <h2 style={{ color: 'white', fontSize: 55 }}>{props.title} </h2>
                

                <div className="filbtn">
                </div>

                <div className="row py-5">
                
                   
                    {accountid?null:
                        coldata?.map((val)=>{
                            return  <div className="col-md-3 col-12 my-2">
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
                                                pathname:`/savenft/${val?val[0]:null}`,
                                                state:val?val:null
                                         }} style={{fontSize:'15px'}}><button className="one">Details</button></Link>
                                    {/* <button className="two">Buy</button> */}
                                </div>
                            </div>
                        </div>
                        })
                    }
                     {spi?
                        alldata.length?null:
                        <div style={{display:'flex',justifyContent:"center"}}>
                            <Spinner animation="border" variant="light" />

                        </div>:null
                         
                    }
                    {
                        alldata?.map((val) => {
                            return  <div className="col-md-3 col-12 my-2">
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
                                                    pathname:`/savenft/${val?val[0]:null}`,
                                                    state:val?val:null
                                             }} style={{fontSize:'15px'}}><button className="one">Details</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                                   
                        })
                    }


                </div>
            </div>


        </div>
    )
}

export default Carosel
