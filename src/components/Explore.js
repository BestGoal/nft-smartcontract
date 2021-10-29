import React, { useEffect, useState } from 'react'
import data from './Pdata'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import Web3 from 'web3'
import nft from '../abi/nft.json'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import { MdCancel } from "react-icons/md";
import fromExponential from 'from-exponential';
function Explore() {
    const [active, setactive] = useState('sales')
    const [list, setlist] = useState([])
    const [list2, setlist2] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [newlist, setnewlist] = useState([])

    const location = useLocation()
    const [mainlist, setmainlist] = useState([])
    const [mainlistauc, setmainlistauc] = useState([])
    const [arr, setArr] = useState([]);
    const [arrauc, setArrauc] = useState([]);
    const [price, setprice] = useState([])
    const [pricearr, setpricearr] = useState()
    const [payvalue, setpayvalue] = useState()
    const [modaldatao, setmodaldatao] = useState()
    const [modaldatac, setmodaldatac] = useState()
    const [modaldatai, setmodaldatai] = useState()
    const [modaldataaa, setmodaldataaa] = useState()
    const [modaldatap, setmodaldatap] = useState()
    const [modaldatacol, setmodaldatacol] = useState()
    const [modaldatatok, setmodaldatatok] = useState()
    const [allfixed, setallfix] = useState([])
    const [allp, setallp] = useState([])
    const [spin, setspin] = useState()
    const [tokenid, settokenid] = useState()
    const [allprice, setallprice] = useState()


    // console.log('paylist', allfixed)


    const listl = []
    // console.log('lklk', listl)
    useEffect(() => {
        // console.log('1')

        salenft(0)

    }, [])

    const salenft = async (id) => {
        // console.log('2')
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.listofsalenft(id).call({ from: userwalletaddresss })
                .then((length) => {
                    // console.log('aaa', length);
                    setlist(length[0])
                    // setlist2(length[1])
                    console.log('listone', length[0])
                    var listlen = length[0]?.length
                    // console.log('bn',length[0])
                    for (let i = 0; i < listlen; i++) {
                        // console.log(`akk${i}`,length[0][i])
                        const ll = length[0][i]
                        nftinfo(ll)

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
                    console.log(`detail${id}`, fees);
                    setspin(fees)
                    savelist(fees)
                    localStorage.setItem(`buylist${id}`, JSON.stringify(fees))
                    setArr(id)
                    salenftprie(fees[0])


                }).catch()

        }
    }
    const savelist = (data) => {
        setallfix((old) => [
            ...old, data
        ])


    }
    // const nftinfo2 = async (id) => {
    console.log('alldata', allfixed)



    // useEffect(() => {
    //     // console.log('5')
    //     // console.log('lls',localStorage.getItem(`buylist1`))
    //     newlist.map((val, i) => {
    //         const pist = JSON.parse(localStorage.getItem(`buylist${val}`))
    //         // console.log('ppp',pist)
    //         setmainlist((old) => {
    //             return [...old, pist===mainlist?null:pist]
    //         })

    //     })
    // }, [arr])

    const salenftprie = async (id) => {
        // console.log('riht',id)
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.listofsalenft(id).call({ from: userwalletaddresss })
                .then((length) => {
                    const val = {
                        id: id, value: length[3]
                    }
                    // console.log('aaaprice',length);
                    // setlist(length[1])
                    // setlist2(length[1])
                    localStorage.setItem(`normasale${id}`, (length[3]))
                    setpricearr(id)
                    getallprice(val)
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
            setallprice(allp)
        }

    }
    console.log('popeice', allp)
    console.log('allpopeice', allprice)
    useEffect(() => {
        // console.log('5')
        // console.log('lls',localStorage.getItem(`buylist1`))
        newlist.map((val, i) => {
            const pist = localStorage.getItem(`normalsale${val}`)
            // console.log('ppp',pist)
            setprice((old) => {
                return [...old, pist]
            })


        })
    }, [arr, pricearr])
    // console.log('pppappa', allp)

    // console.log('ssss452', mainlistauc)
    const buyfixednft = async (collectionid, tokenid, amount) => {
        console.log(collectionid, tokenid, amount)

        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            settokenid(accounts)
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
            let amountIn = window.web3.utils.toBN(fromExponential((amount) * Math.pow(10, 18)));
            console.log('amout', amountIn)
            swaping.methods.buynft(collectionid, tokenid).send({ from: userwalletaddresss, value: amountIn })
                .then((recipt) => {
                    // console.log(recipt);
                    setShow(false)
                    localStorage.removeItem(`buylist${tokenid}`)
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

                    <button className={active === "sales" ? "exactive" : null}  >Sales</button>
                    <NavLink to="/exploreaauc"><button className={active === "auction" ? "exactive" : null}>Auctions</button></NavLink>
                </div>
                {/* <div className="exploreinput mx-5">
                    <input type="text" placeholder="Search Listing" />
                    <div className="sicon">
                        <AiOutlineSearch />
              

                    </div>
                    


                </div> */}
                <div className="row py-5">
                    {spin ?
                        allfixed.length ? null :
                            <div style={{ display: 'flex', justifyContent: "center" }}>
                                <Spinner animation="border" variant="light" />

                            </div> : null

                    }

                    {allp?.length === allfixed?.length ?
                        allfixed.map((val, id) => {
                            return <>


                                <div className="col-md-3 col-12 my-2">
                                    <div className="excard px-2">
                                        <div className="excardimg">
                                            <img src={`https://ipfs.infura.io/ipfs/${val ? val[6] : null}`} className="img-fuild" alt="ll" />

                                        </div>
                                        <div className="excarddetail">
                                            <p>{val ? val[1] : null}</p>
                                            <p></p>
                                            {allp.map((vala) => {
                                                
                                                if (vala.id === val[0]) {
                                                    return <p>{vala?.value?.length > 21?allp[id]?.value / 1000000000000000000000000000000000000 : vala?.value / 1000000000000000000} BNB = $ {vala?.value?.length > 21 ? (vala?.value / 1000000000000000000000000000000000000) * 487 : (vala?.value / 1000000000000000000) * 487 } </p>

                                                }


                                            })}
                                            {/* <p>{allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000} BNB = $ {allp[id]?.value?.length > 21 ? (allp[id]?.value / 1000000000000000000000000000000000000) * 487 : (allp[id]?.value / 1000000000000000000) * 487}</p> */}
                                            {/* <p>{allp[id]?.value?.length} ETH</p> */}
                                            {/* <p>{id}</p> */}
                                            {/* <p>{allp.find(p=>p.id==="4")?allp.find(p=>p.id==="4"):null}</p> */}

                                        </div>
                                        <div className="excardbtn">
                                            <Link to={{
                                                pathname: `/assetdetail/${val ? val[0] : null}`,
                                                state: val
                                            }} style={{ fontSize: '15px' }}><button className="one">Detail</button></Link>
                                            <button className="two" onClick={() =>  buyfixednft(val[7], val[0], Number(allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000))}>Buy</button>
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
                                            buyfixednft(val[7], val, Number(allp[id]?.value?.length > 21 ? allp[id]?.value / 1000000000000000000000000000000000000 : allp[id]?.value / 1000000000000000000))


                                        }}>
                                            {
                                                tokenid ? null :

                                                    <Modal.Header >
                                                        <h3><span>Mint Asset Summary</span> <MdCancel onClick={handleClose} /></h3>
                                                        <div className="assetowner">
                                                            <h4>Asset Owner:</h4>
                                                            <h5>{modaldatao}</h5>
                                                        </div>
                                                        <div className="assetowner">
                                                            <h4>Copies:</h4>
                                                            <h5>{modaldatac}</h5>
                                                        </div>
                                                    </Modal.Header>
                                            }
                                            <Modal.Body>
                                                {
                                                    tokenid ? <div style={{ display: 'flex' }}><h3 className="mx-5">loading...</h3><Spinner animation="grow" variant="light" /></div> :


                                                        <div className="row">
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
                                                            <div className="col-6 attricard">
                                                                <div className="attributes">
                                                                    {/* <p>pop{Number(modaldatap?.length)}</p> */}
                                                                    <input type="Number" placeholder={`enter amount minval- ${modaldatap} BNB`} step="any" min={modaldatap} onChange={(e) => setpayvalue(e.target.value)} required />
                                                                </div>

                                                            </div>
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


                            </>
                        }) : null
                    }


                </div>


            </div>


        </div>
    )
}

export default Explore
