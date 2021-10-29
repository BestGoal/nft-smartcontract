import React, { useState } from 'react'
import { BiImageAdd, BiChevronLeft } from "react-icons/bi";
import { useHistory, useParams } from 'react-router-dom';
import { Button, Modal, Spinner } from 'react-bootstrap'
// import Modal from 'react-bootstrap/Modal'
import { MdCancel } from "react-icons/md";
import Web3 from 'web3'
import nft from '../abi/nft.json'
import fromExponential from 'from-exponential'

const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

function Assetcreator() {
    const { nftid } = useParams()
    const [img, setimg] = useState()
    console.log('assetimg', img)
    const [buffer, setbuffer] = useState();
    const [displayimage, setdisplayimg] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [copies, setcopies] = useState()
    const [ownername, setownername] = useState()
    const [assetname, setassetname] = useState()
    const [assetimg, setassetimg] = useState()
    const [assetdescrip, setassetdescrip] = useState()
    const history = useHistory()
    const [tokenid, settokenid] = useState()
    const [pay, setpay] = useState()
    const [price, setprice] = useState()
    const [aid, setaid] = useState()
    console.log('nfttidnew', price)


    const submit = async (e) => {
        e.preventDefault()
        // setShow(true)
        // nftidn()
        if(price){
            
            await ipfs.add(buffer, (error, result) => {
                console.log("ipfs result", result[0].hash);
                console.log(result[0].hash);
                swaps(result[0].hash);
                if (error) {
                    console.error(error)
                    return;
                }
            })
        }else{
            await ipfs.add(buffer, (error, result) => {
                console.log("ipfs result", result[0].hash);
                console.log(result[0].hash);
                swapsnull(result[0].hash);
                if (error) {
                    console.error(error)
                    return;
                }
            })
            
        }


       

    }

    // 0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC 


    const choosepic = (e) => {
        setimg(e.target.files[0])
        const file = e.target.files[0];
        const render = new FileReader()
        render.onload = () => {
            if (render.readyState === 2) {
                setdisplayimg(render.result)
            }
            const reader = new window.FileReader()
            reader.readAsArrayBuffer(file)
            reader.onloadend = () => {
                const buffer = Buffer.from(reader.result);
                setbuffer(buffer);
                console.log('buffer', buffer)
            }
        }
        render.readAsDataURL(e.target.files[0])
    }
    const nftidn = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')

            swaping.methods.tokenidmint().call({ from: userwalletaddresss })
                .then((id) => {
                    // console.log('iddnew',String(Number(id)+1));
                    console.log(String(Number(id) + 1))
                    fixedsale(id)

                })
                .catch()

        }
    }

    const swaps = async (e) => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            settokenid(accounts)
            setShow(true)
            setpay('')
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
            let collectionid = nftid;
            let copies = 1;
            swaping.methods.create(collectionid, userwalletaddresss, e, assetname, ownername, copies, assetdescrip).send({ from: userwalletaddresss })
                .then((fees) => {
                    console.log(fees);
                    if (fees.status === true) {
                        //   history.goBack('/create') 
                        console.log('done')
                        nftidn() 


                    } else {
                        alert('failed')
                    }
                }).catch((err) => {

                    settokenid('')
                    setShow(false)
                    setpay('')
                    console.log('erre')
                })

        }
    }
    const swapsnull = async (e) => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            //  console.log(accounts);
            settokenid(accounts)
            setShow(true)
            setpay('')
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
            let collectionid = nftid;
            let copies = 1;
            swaping.methods.create(collectionid, userwalletaddresss, e, assetname, ownername, copies, assetdescrip).send({ from: userwalletaddresss })
                .then((fees) => {
                    console.log(fees);
                    if (fees.status === true) {
                        //   history.goBack('/create') 
                        console.log('done')
                        settokenid('')
                        setpay('suceess')
                        setShow(true)


                    } else {
                        alert('failed')
                    }
                }).catch((err) => {

                    settokenid('')
                    setShow(false)
                    setpay('')
                    console.log('erre')
                })

        }
    }
    
    // console.log("mmm", fdata)
    const fixedsale = async (tokenid) => {
        console.log('akhj', price)
        console.log('tokenakhj', tokenid)
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts);
            settokenid(accounts)
            setShow(true)
            setpay('')
            let userwalletaddresss = accounts[0];
            window.web3 = new Web3(window.ethereum);
            let swaping = new window.web3.eth.Contract(nft, '0x45e995ad1e313D5a7A9Fd4df6159cAb6e26082fC')
            let amount = window.web3.utils.toBN(fromExponential(((parseFloat(price)) * Math.pow(10, 18))));
            console.log('mainamout', amount)

            swaping.methods.fixedsales(tokenid, amount).send({ from: userwalletaddresss })
                .then((length) => {
                    console.log(length);
                    if (length.status === true) {
                        settokenid('')
                        setpay('suceess')
                        setShow(true)
                    } else {
                        alert('failed')
                    }
                })
                .catch((err) => {
                    settokenid('')
                    setShow(false)
                    setpay('')
                })

        }
    }


    return (
        <div className="createasset">
            <div className="container">
                <div className="row">


                    {/* upper part  */}


                    <div className="col-md-7 col-12 headingl">
                        <p onClick={() => history.goBack()} style={{ color: 'white', cursor: 'pointer', fontSize: '25px' }} ><BiChevronLeft /> Back</p>
                        <h2>Mint Assest</h2>
                        <h3>Create your collection first. Then you’ll create your schemas and assets.</h3>

                    </div>
                    <div className="col-md-7 col-12 headingr">

                    </div>

                </div>
                <form onSubmit={submit}>
                    <div className="row">

                        <div className="col-md-3 col-12 mb-5">
                            <div className="nftcard">

                                <label for="actual-btn">
                                    <div className="mnftcard ">
                                        {
                                            displayimage ? <img src={displayimage} className="img-fluid" /> :
                                                <>
                                                    <BiImageAdd />
                                                    <h3>Add a collection photo</h3>
                                                    <p>Transparent backgrounds are recommended if possible</p>
                                                </>
                                        }



                                    </div>
                                </label>
                                <input type="file" id="actual-btn" className="d-none" onChange={choosepic} required />

                            </div>

                        </div>
                        <div className="col-md-9 px-5 col-12">


                            {/* middle part  */}



                            <div className="nftcreatecard">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <label>Asset Owner <br />(12 Character, 1-5 & a-z)</label>
                                        <input type="text" placeholder="Account name" onChange={(e) => setownername(e.target.value)} required />
                                        {/* <label>Display Name</label>
                                        <input type="text"  required /> */}
                                    </div>
                                    <div className="col-md-6 col-12">
                                        {/* <label>Number or Copies</label>
                                        <input type="Number" id="quantity" name="quantity" min="1.0" onChange={(e) => setcopies(e.target.value)} required /> */}
                                        <div className=" nftcbtn">
                                            <button type="submit" >Create Assest</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* lower part  */}


                    <div className="row p-5">
                        <div className="col-12 assetone">
                            <div className="row">


                                <div className="left col-md-4 col-12">
                                    <h3>name</h3>
                                </div>
                                <div className="right col-md-8 col-12">
                                    <input type="text" placeholder="Name" onChange={(e) => setassetname(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 assetone">
                            <div className="row">
                                <div className="left col-md-4 col-12">
                                    <h3>description</h3>
                                </div>
                                <div className="right col-md-8 col-12">
                                    <input type="text" placeholder="Description" onChange={(e) => setassetdescrip(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 assetone">
                            <div className="row">
                                <div className="left col-md-4 col-12">
                                    <h3>Price</h3>
                                </div>
                                <div className="right col-md-8 col-12">
                                    <input type="number" placeholder="Price" min="0" step="any" onChange={(e) => setprice(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <>



                            {/* modal part                   */}

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >

                                <Modal.Body>
                                    <div className="row">
                                        {
                                            tokenid ? <div style={{ display: 'flex' }}><h2 className="mx-5">Loading</h2> <Spinner animation="grow" variant="light" /></div> : null

                                        }
                                        {
                                            pay ? <h2>Asset Created Sucessfully</h2> : null
                                        }

                                    </div>

                                </Modal.Body>
                                <Modal.Footer>
                                    {/* {
                                        tokenid?null:<Button variant="primary" onClick={()=>history.goBack('/')} >Ok</Button>} */}

                                    {
                                        pay ? <Button variant="primary" onClick={() => history.goBack('/mycollection')} >Ok</Button> : null
                                    }
                                </Modal.Footer>
                            </Modal>
                        </>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Assetcreator
