import React, { useEffect, useState } from 'react'
import data from './Pdata'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import Web3 from 'web3'
import nft from '../abi/nft.json'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { MdCancel } from "react-icons/md";
import fromExponential from 'from-exponential';
import Spinner from 'react-bootstrap/Spinner'
function Explore2() {
    const [active, setactive] = useState('auction')
    const [list, setlist] = useState([])
    const [list2, setlist2] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [mainlist, setmainlist] = useState([])
    const [mainlistauc, setmainlistauc] = useState([])
    const [arr, setArr] = useState([]);
    const [arrauc, setArrauc] = useState([]);
    const [price, setprice] = useState([])
    const [pricearr, setpricearr] = useState()
    const [newlist, setnewlist] = useState([])
    const [payvalue, setpayvalue] = useState()
    const [highauc, sethighauc] = useState()
    const [highauid, sethighauid] = useState()
    const [modaldatao, setmodaldatao] = useState()
    const [modaldatac, setmodaldatac] = useState()
    const [modaldatai, setmodaldatai] = useState()
    const [modaldataaa, setmodaldataaa] = useState()
    const [modaldatap, setmodaldatap] = useState()
    const [modaldatacol, setmodaldatacol] = useState()
    const [modaldatatok, setmodaldatatok] = useState()
    const [exprice, setexprice] = useState()
    const [allfixed, setallfix] = useState([])
    const [allp, setallp] = useState([])
    const [allhighp, setallhighp] = useState([])
    const [timew, settimew] = useState([])
    const [p1, setp1] = useState()
    const [p2, setp2] = useState()
    const [tokenid, settokenid] = useState()




    useEffect(() => {

        salenft(0)

    }, [])


    const salenft = async (id) => {
        console.log('2')
        if (window.ethereum) {

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });


            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.listofsalenft(id).call({ from: userwalletaddresss })
                .then((length) => {
                    // console.log('listlist', length);
                    setlist(length[1])
                    // setlist2(length[1])
                    var listlen = length[1]?.length
                    // console.log('bnmm', listlen)
                    for (let i = 0; i < listlen; i++) {
                        // console.log('akk',length[0][i])
                        const ll = length[1][i]
                        nftinfo(ll)
                        // salenftprie(length[2])

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
                    // console.log('aafg', fees);
                    // localStorage.setItem(`buylistauc${id}`, JSON.stringify(fees))
                    setArr(id)
                    savelist(fees)
                    salenftprie(fees[0])


                }).catch()

        }
    }
    const savelist = (data) => {
        setallfix((old) => [
            ...old, data
        ])


    }
    console.log('lok', exprice)

    const salenftprie = async (id) => {
        // console.log('poij', id)
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.listofsalenft(id).call({ from: userwalletaddresss })
                .then((length) => {
                    // console.log('aaaprice', length);
                    const val = {
                        id: id, value: length[2]
                    }
                    // setlist(length[1])
                    // console.log('asas',val)
                    // setlist2(length[1])
                    // localStorage.setItem(`auctionsale${id}`, (length[2]))
                    setpricearr(id)
                    getallprice(val)
                    timer(id)
                    auctiondetail(id)
                })
                .catch()

        }
    }
    const getallprice = (data) => {
        if (data.id === "0") {
            // console.log('notallowed',data)
        } else {
            // console.log('dataaallower',data)
            setallp((old) => [
                ...old, data
            ])
        }

    }
    console.log('popeice', allp)










    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     //   console.log('This will run every second!');
    //       list?.map((val) => {
    //         timer(val)
    //         auctiondetail(val)
    //         // console.log('aaaaaaa')
    //     })
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, [list,pricearr,price]);
    const timer = async (id) => {
        // console.log('saa',id)
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')


            swaping.methods.timing(id).call({ from: userwalletaddresss })
                .then((fees) => {

                    var day = Math.floor(fees / 86400)
                    var hr = Math.floor((fees - day * 86400) / 3600)
                    var minutesout = Math.floor((fees - day * 86400 - hr * 3600) / 60);
                    // console.log("hr",hr)
                    // console.log("day",day)
                    // console.log("min",minutesout)
                    settime({ id: id, d: day, h: hr, m: minutesout })


                }).catch()

        }
    }
    const settime = (data) => {
        settimew((old => [
            ...old, data
        ]))

    }
    console.log('jkijjh', timew)
    const auctiondetail = async (id) => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.auctiondetail(id).call({ from: userwalletaddresss })
                .then((value) => {
                    // console.log('assasacvbv',value);     
                    // localStorage.setItem(`highauc${id}`, value[0])
                    // localStorage.setItem(`highaucid${id}`, value[1])
                    var aucde = {
                        id: value[1],
                        val: value[0],
                        userid: id
                    }
                    getallhighprice(aucde)
                }).catch()

        }
    }
    const getallhighprice = (data) => {
        if (data.id === "0") {
            // console.log('notallowed',data)
        } else {
            // console.log('dataaallower',data)
            setallhighp((old) => [
                ...old, data
            ])
        }

    }
    console.log('popeicehigh', allhighp)


    const buyauctionnft = async (tokenid, amount) => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            settokenid(accounts)

            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
            let amountIn = window.web3.utils.toBN(fromExponential((amount) * Math.pow(10, 18)));
            swaping.methods.buyauction(tokenid).send({ from: userwalletaddresss, value: amountIn })
                .then((recipt) => {
                    // console.log(recipt);
                    setShow(false)
                    window.location.reload(true)
                })
                .catch((err) => {
                    setShow(false)
                    settokenid('')
                })
        }
    }
    const claimauctionnft = async (collectionid, tokenid) => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);

            settokenid(accounts)
            setShow(true)
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
            // let amountIn = window.web3.utils.toBN(fromExponential((amount) * Math.pow(10,18)));
            swaping.methods.claim(collectionid, tokenid).send({ from: userwalletaddresss })
                .then((recipt) => {
                    // console.log(recipt);
                    window.location.reload(true)
                })
                .catch((err) => {
                    setShow(false)
                    settokenid('')
                })
        }
    }

    return (
        <div className="explore">
            <div className="container px-5">

                <div className="filbtn">

                    <NavLink to="/explore"><button className={active === "sales" ? "exactive" : null}  >Sales</button></NavLink>
                    <button className={active === "auction" ? "exactive" : null} >Auctions</button>
                </div>
                {/* <div className="exploreinput mx-5">
                    <input type="text" placeholder="Search Listing" />
                    <div className="sicon">
                        <AiOutlineSearch />
                     

                    </div>


                </div> */}

                <div className="row py-5">
                    {
                        allfixed.length ? null :
                            <div style={{ display: 'flex', justifyContent: "center" }}>
                                {/* <Spinner animation="border" variant="light" /> */}

                            </div>

                    }
                    {
                        allfixed ? allfixed.map((val, id) => {
                            return <div className="col-md-3 col-12 my-2">
                                <div className="excard px-2">

                                    <div className="excardimg">
                                        <img src={`https://ipfs.infura.io/ipfs/${val ? val[6] : null}`} className="img-fuild" alt="ll" />

                                    </div>
                                    <div className="excarddetail">
                                        <p>{val ? val[1] : null}</p>
                                        <p></p>

                                        {


                                            allhighp.map((u) => {

                                                if (u.userid === val[0]) {
                                                    return allp.map((vala) => {
                                                        if (vala.id === val[0]) {
                                                            return <>
                                                                {
                                                                    Number(u?.val) > Number(vala?.value) ? <> <p>{Number(u?.val) / 1000000000000000000} BNB = $ {(Number(u?.val) / 1000000000000000000) * 487} BNB </p><p style={{ fontSize: '10px' }}>{u?.id}</p></> :
                                                                        <p>{Number(Number(vala?.value?.length > 21 ? vala?.value / 1000000000000000000000000000000000000 : vala?.value / 1000000000000000000))}BNB =$ {(Number(Number(vala?.value?.length > 21 ? vala?.value / 1000000000000000000000000000000000000 : vala?.value / 1000000000000000000)) * 487)} </p>
                                                                }
                                                                {/* <p>{Number(u?.val) / 1000000000000000000} BNB = $ {(Number(u?.val) / 1000000000000000000) * 487} BNB </p> */}
                                                            </>

                                                        }
                                                    })




                                                }
                                            })

                                        }




                                        {/* {
                                            Number(allhighp[id]?.val) > Number(allp[id]?.value) ? <> <p>{Number(allhighp[id]?.val) / 1000000000000000000} BNB = $ {(Number(allhighp[id]?.val) / 1000000000000000000) * 487} BNB </p><p style={{ fontSize: '10px' }}>{allhighp[id]?.id}</p></> : <p>{Number(Number(allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000))}BNB =$ {(Number(Number(allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000)) * 487)} </p>
                                        } */}
                                        {
                                            timew.map((t) => {
                                                if (t.id === val[0]) {
                                                    return <p style={{ color: 'orange', fontSize: '12px' }}>{`${t?.d} Days ${t?.h} Hr ${t?.m} Min`}</p>
                                                }
                                            })

                                        }



                                    </div>
                                    <div className="excardbtn">
                                        <Link to={{
                                            pathname: `/assetdetail/auction`,
                                            state: val 
                                        }} style={{ fontSize: '15px' }}><button className="one">Detail</button></Link>
                                        {
                                            timew.map((t) => {
                                                if (t.id === val[0]) {
                                                    return <>   {
                                                        ((t?.d) === 0 && (t?.h) === 0) && (t?.m) === 0 ?
                                                            <button className="two" onClick={() => claimauctionnft(val ? val[7] : null, val ? val[0] : null)}>Claim</button> : <button className="two" onClick={() => {
                                                                setmodaldatao(val ? val[3] : null)
                                                                setmodaldatac(val ? val[4] : null)
                                                                setmodaldatai(val ? val[6] : null)
                                                                setmodaldataaa(val ? val[1] : null)
                                                                // setmodaldatap(Number(localStorage.getItem(`auctonsale${newlist[id]}`)) / 1000000000000000000)
                                                                setmodaldatacol(val ? val[7] : null)
                                                                setmodaldatatok(val ? val[0] : null)
                                                                


                                                                
                                                                allhighp.map((u) => {
                                                                    if (u.userid === val[0]) {
                                                                        return allp.map((vala) =>{
                                                                            if (vala.id === val[0]) {
                                                                                return setexprice( Number(u?.val) > Number(vala?.value) ? Number(u?.val) / 1000000000000000000 : Number(Number(vala?.value?.length > 21 ? vala?.value / 1000000000000000000000000000000000000 : vala?.value / 1000000000000000000)))
                                                                            }
                                                                        
                                                                        })
                                                                    }
                                                                })
                                                                

                                                                // setexprice(Number(allhighp[id]?.val) > Number(allp[id]?.value) ? Number(allhighp[id]?.val) / 1000000000000000000 : Number(Number(allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000)))
                                                                // setp1(Number(allhighp[id]?.val))
                                                                // setp2(Number(allp[id]?.value))
                                                                setShow(true)

                                                            }}>Bid</button>
                                                    }
                                                    </>
                                                }

                                            })

                                        }
                                        {/* {
                                            ((timew[id]?.d) === 0 && (timew[id]?.h) === 0) && (timew[id]?.m) === 0 ?
                                                <button className="two" onClick={() => claimauctionnft(val ? val[7] : null, val ? val[0] : null)}>Claim</button> : <button className="two" onClick={() => {
                                                    setmodaldatao(val ? val[3] : null)
                                                    setmodaldatac(val ? val[4] : null)
                                                    setmodaldatai(val ? val[6] : null)
                                                    setmodaldataaa(val ? val[1] : null)
                                                    // setmodaldatap(Number(localStorage.getItem(`auctonsale${newlist[id]}`)) / 1000000000000000000)
                                                    setmodaldatacol(val ? val[7] : null)
                                                    setmodaldatatok(val ? val[0] : null)
                                                    setexprice(Number(allhighp[id]?.val) > Number(allp[id]?.value) ? Number(allhighp[id]?.val) / 1000000000000000000 : Number(Number(allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000)))
                                                    // setp1(Number(allhighp[id]?.val))
                                                    // setp2(Number(allp[id]?.value))
                                                    setShow(true)

                                                }}>Bid</button>
                                        } */}

                                    </div>
                                </div>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        console.log('colid', val ? val[7] : null)
                                        console.log('astid', val ? val[0] : null)
                                        console.log('price', payvalue)
                                        // buyfixednft(val ? val[7] : (JSON.parse(localStorage.getItem(`buylist${id + 1}`)))[7], val ? val[0] : (JSON.parse(localStorage.getItem(`buylist${id + 1}`)))[0], payvalue)
                                        buyauctionnft(modaldatatok, payvalue)

                                    }}>
                                        {
                                            tokenid ? null :

                                                <Modal.Header >
                                                    <h3><span>Mint Asset Summary</span> <MdCancel onClick={handleClose} /></h3>
                                                    <div className="assetowner">
                                                        <h4>Asset Owner:</h4>
                                                        <h5>{modaldatao}</h5>
                                                        {/* <h3>{p1}</h3>
                                                <h3>{p2}</h3> */}

                                                    </div>
                                                    <div className="assetowner">
                                                        <h4>Copies:</h4>
                                                        <h5>{modaldatac}</h5>
                                                    </div>
                                                </Modal.Header>
                                        }
                                        <Modal.Body>
                                            {
                                                tokenid ? <div style={{ display: 'flex' }}><h3 className="mx-5">loading...</h3><Spinner animation="grow" variant="light" /></div> : <div className="row">
                                                    <div className="col-6">
                                                        <div className="savenftcard">
                                                            <div className="savemnftcard">
                                                                <div className="img">
                                                                    <img src={`https://ipfs.infura.io/ipfs/${modaldatai}`} className="img-fuild" alt="ll" />
                                                                </div>
                                                                <div className="carddetails">
                                                                    <p>{modaldataaa}</p>
                                                                    {/* <h3>{assetname}</h3> */}
                                                                    {/* <h4>{ownername}</h4> */}

                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <img src={displayimage} className="img-fluid" /> */}

                                                    </div>
                                                    {
                                                        tokenid ? null :

                                                            <div className="col-6 attricard">
                                                                <div className="attributes">
                                                                    <input type="Number" placeholder={`enter amount minval- ${exprice} ETH`} min={(exprice)} step="any" onChange={(e) => setpayvalue(e.target.value)} required />
                                                                </div>

                                                            </div>
                                                    }
                                                </div>
                                            }


                                        </Modal.Body>
                                        {
                                            tokenid ? null :

                                                <Modal.Footer>

                                                    <Button type='submit' variant="primary" >Confirm</Button>
                                                </Modal.Footer>
                                        }
                                    </form>
                                </Modal>
                            </div>
                        }) : <p>loading....</p>
                    }


                </div>
            </div>


        </div>
    )
}

export default Explore2
