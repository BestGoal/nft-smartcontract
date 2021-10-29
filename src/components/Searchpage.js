import React, { useState, useEffect } from 'react'
import { coldata,data1,data2 } from './Pdata'
import { Link, useParams } from 'react-router-dom'
import Web3 from 'web3'
import nft from '../abi/nft.json'
import { AiOutlineSearch } from "react-icons/ai";
function Searchpage({ sdata }) {

    // const [active, setactive] = useState('sales')
    const [colllist, setcolllist] = useState()
    // const [assetist, setassetlist] = useState()
    // const [allcolllist, allsetcolllist] = useState([])
    const [active, setactive] = useState('sales')
    const [alldata, setalldata] = useState([])
    const [show, setshow] = useState(false)
    const [aldatafil, setaldatafil] = useState(alldata)
    const [result, setresult] = useState([])
    const [resulta, setresulta] = useState([])
    const { type } = useParams()
    // console.log('aashie', alldata)
    const [assetist, setassetlist] = useState()
    const [allcolllist, allsetcolllist] = useState([])
    const [allmaindata,setallmaindata] = useState()
    const [subdata,setsubdata] = useState([])
    const [subdata2,setsubdata2] = useState([])    
    const [subdata3,setsubdata3] = useState([])
    const [accountid,setaccountid] = useState()
    
    useEffect(async() => {
        totalcolection()
        const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setaccountid(accounts1)

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
                })
                .catch()

        }
    }
    useEffect(() => {
        for (let i = 1; i <= colllist; i++) {
            collectiondetails(i);
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
                    // setactive(id)
                    getalllist(fees)


                }).catch()

        }
    }

    const getalllist = (data) => {
        setalldata((old) => [
            ...old, data
        ])


    }
    useEffect(()=>{
        totalnft()
    },[])
     
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
     const getallasset = (data)=>{
         allsetcolllist(old=>[
             ...old,data
         ])
 
     }
     
    
    // setallmaindata([alldata,allcolllist])

    // console.log('alladata', aldatafil)
    useEffect(() => {

        if (type !== "") {
            // console.log('aaa', type)
            const newlist = alldata.filter((con) => {
                return Object.values(con).join(" ").toLowerCase().includes(type.toLowerCase())
            })
            setresult(newlist)
        }

    }, [type,alldata])
    useEffect(() => {

        if (type !== "") {
            // console.log('aaa', type)
            const newlist = allcolllist.filter((con) => {
                return Object.values(con).join(" ").toLowerCase().includes(type.toLowerCase())
            })
            setresulta(newlist)
        }

    }, [type,allcolllist])
    useEffect(() => {

        if (type !== "") {
            // console.log('aaa', type)
            const newlist = coldata.filter((con) => {
                return Object.values(con).join(" ").toLowerCase().includes(type.toLowerCase())
            })
           setsubdata(newlist)
        }

    }, [type,allcolllist])
    useEffect(() => {

        if (type !== "") {
            // console.log('aaa', type)
            const newlist = data2.filter((con) => {
                return Object.values(con).join(" ").toLowerCase().includes(type.toLowerCase())
            })
           setsubdata2(newlist)
        }

    }, [type,allcolllist])
    useEffect(() => {

        if (type !== "") {
            // console.log('aaa', type)
            const newlist = data1.filter((con) => {
                return Object.values(con).join(" ").toLowerCase().includes(type.toLowerCase())
            })
           setsubdata3(newlist)
        }

    }, [type,allcolllist])
    console.log('result2',resulta)


    return (
        <div className="searchone">
            {/* <div className="filbtn">

                <button href="/" className={active === "sales" ? "exactive" : null}  >Collections</button>
                <a href="/searcha"><button className={active === "auction" ? "exactive" : null}>Assets</button></a>
            </div> */}
            <div className="explore ">
                <div className="container px-1 pt-3">
                    <h2 style={{ color: 'white', fontSize: 25,color:'grey' }}>Search Results for <span style={{color:'white'}}>"{type}"</span></h2>
                    {/* <h3 style={{ color: 'red', fontSize: 25 }}> Collections</h3> */}

                    {/* <div className="filbtn">
                        <div className="exploreinput mx-5">
                            <input type="text" placeholder="Search Listing" />
                            <div className="sicon">
                                <AiOutlineSearch />


                            </div>



                        </div>
                    </div> */}

                    <div className="row py-5">

                    {accountid?null:
                            subdata?.map((val) => {
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





                        {
                            result?.map((val) => {
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
                        {
                       resulta? resulta?.map((val) => {
                            return <div className="col-md-3 col-12 my-2">
                                <div className="excard px-2">
                                    <div className="excardimg">
                                        {
                                            val?
                                        
                                        <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} className="img-fuild" alt="ll" />
                                        :null}

                                    </div>
                                    <div className="excarddetail">
                                        <p>{val?val[2]:null}</p>
                                        <p>{val?val[3]:null}</p>
                                        {/* <p>10.52WAX</p> */}

                                    </div>
                                    <div className="excardbtn">
                                        
                                        <Link to={{
                                                pathname:`/assetdetail/${val?val[0]:null}`,
                                                state:val
                                            }} style={{fontSize:'15px'}}><button className="one">Detail</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                        }):null
                    }
                    {accountid?null:
                       subdata2? subdata2?.map((val) => {
                            return <div className="col-md-3 col-12 my-2">
                                <div className="excard px-2">
                                    <div className="excardimg">
                                        {
                                            val?
                                        
                                        <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} className="img-fuild" alt="ll" />
                                        :null}

                                    </div>
                                    <div className="excarddetail">
                                        <p>{val?val[2]:null}</p>
                                        <p>{val?val[3]:null}</p>
                                        {/* <p>10.52WAX</p> */}

                                    </div>
                                    <div className="excardbtn">
                                        
                                        <Link to={{
                                                pathname:`/assetdetail/${val?val[0]:null}`,
                                                state:val
                                            }} style={{fontSize:'15px'}}><button className="one">Detail</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                        }):null
                    }
                    {accountid?null:
                       subdata3? subdata3?.map((val) => {
                            return <div className="col-md-3 col-12 my-2">
                                <div className="excard px-2">
                                    <div className="excardimg">
                                        {
                                            val?
                                        
                                        <img src={`https://ipfs.infura.io/ipfs/${val?val[6]:null}`} className="img-fuild" alt="ll" />
                                        :null}

                                    </div>
                                    <div className="excarddetail">
                                        <p>{val?val[2]:null}</p>
                                        <p>{val?val[3]:null}</p>
                                        {/* <p>10.52WAX</p> */}

                                    </div>
                                    <div className="excardbtn">
                                        
                                        <Link to={{
                                                pathname:`/assetdetail/${val?val[0]:null}`,
                                                state:val
                                            }} style={{fontSize:'15px'}}><button className="one">Detail</button></Link>
                                        {/* <button className="two">Buy</button> */}
                                    </div>
                                </div>
                            </div>
                        }):null
                    }

                     {
                         result && resulta? null : <p>No Search data</p>
                     }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Searchpage
