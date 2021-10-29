import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import img1 from '../img/atom.png'
import img2 from '../img/coins.png'
import img3 from '../img/trade.png'
import img4 from '../img/label.png'
function Midline() {
    return (
        <div className="midline">
            <div className="container">
            <div className="row midlist px-2">
                    <div className="col-md-3 col-12 midlistmain">
                        <div className="listlogo">
                           <img src={img1} className="img-fluid" alt="img"  />
                        </div>
                        <div className="listhead">
                            <h3>43,474,448</h3>
                            <h3>NFTs Created</h3>
                        </div>

                    </div>
                    <div className="col-md-3 col-12 midlistmain">
                        <div className="listlogo">
                        <img src={img4} className="img-fluid" alt="img" />
                        </div>
                        <div className="listhead">
                            <h3>38,893 Sales</h3>
                            <h3>Today</h3>
                        </div>

                    </div>
                    <div className="col-md-3 col-12 midlistmain">
                        <div className="listlogo">
                        <img src={img3} className="img-fluid" alt="img" />
                        </div>
                        <div className="listhead">
                            <h3>161,348 Txs</h3>
                            <h3>Today</h3>
                        </div>

                    </div>
                    <div className="col-md-3 col-12 midlistmain">
                        <div className="listlogo">
                        <img src={img2} className="img-fluid" alt="img" />
                        </div>
                        <div className="listhead">
                            <h3>2,284,355</h3>
                            <h3>WAX Daily <br/> Volume</h3>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Midline
