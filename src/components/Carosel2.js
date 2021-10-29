import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { NavLink, Link } from 'react-router-dom'
import Web3 from 'web3'
import nft from '../abi/nft.json'
import { data1, data2 } from './Pdata'
import Spinner from 'react-bootstrap/Spinner'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, Lazy } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Lazy]);

function Carosel2(props) {

    const [assetist, setassetlist] = useState()
    const [allcolllist, allsetcolllist] = useState([])
    const [show, setshow] = useState(false)
    const [spin, setspin] = useState()

    const [accountid, setaccountid] = useState()

    useEffect(async () => {
        const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setaccountid(accounts1)
        totalnft()
    }, [])

    const totalnft = async () => {
        if (window.ethereum) {
            setshow(true)
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.tokenidmint().call({ from: userwalletaddresss })
                .then((length) => {

                    setassetlist(length)
                    
                })
                .catch()

        }
    }
    useEffect(() => {
        for (let i = 1; i <= assetist; i++) {
            nftinfo(i);
            setspin(i)


        }


    }, [assetist])

    const nftinfo = async (id) => {
        console.log('four fun')
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.nftinformation(id).call({ from: userwalletaddresss })
                .then((fees) => {

                    getallasset(fees)

                }).catch()

        }
    }
    const getallasset = (data) => {
        allsetcolllist(old => [
            ...old, data
        ])

    }

    console.log('aasd', allcolllist)

    return (
        <div className="explore explorecaro">
            <div className="container px-0">
                <h2 style={{ color: 'white', fontSize: 55 }}>Assets</h2>

                <div className="filbtn">

                    {/* <button className={active==="sales"?"exactive":null} onClick={()=>setactive('sales')} >Sales</button> */}
                    {/* <button className={active==="auction"?"exactive":null} onClick={()=>setactive('auction')}>Auctions</button> */}
                </div>
                {/* <div className="exploreinput mx-5">
                    <input type="text" placeholder="Search Listing" />
                    <div className="sicon">
                        <AiOutlineSearch />

                    </div>


                </div> */}


                <div className="row py-5">
                    {accountid?null:
                        data1?.map((val, i) => {
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

                                        <Link to={{
                                            pathname: `/assetdetail/${val ? val[0] : null}`,
                                            state: val
                                        }} style={{ fontSize: '15px' }}><button className="one">Detail</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    {accountid?null:
                        data2?.map((val, i) => {
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

                                        <Link to={{
                                            pathname: `/assetdetail/${val ? val[0] : null}`,
                                            state: val
                                        }} style={{ fontSize: '15px' }}><button className="one">Detail</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    {spin ?
                        allcolllist.length ? null :
                            <div style={{ display: 'flex', justifyContent: "center" }}>
                                <Spinner animation="border" variant="light" />

                            </div> : null

                    }
                    {
                        allcolllist ? allcolllist?.map((val) => {
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

                                        <Link to={{
                                            pathname: `/assetdetail/${val ? val[0] : null}`,
                                            state: val
                                        }} style={{ fontSize: '15px' }}><button className="one">Detail</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                        }) : null
                    }


                </div>
            </div>


        </div>
    )
}


export default Carosel2
