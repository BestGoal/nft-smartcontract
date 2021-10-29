import React from 'react'
import img1 from '../img/img1.png'

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 homeimg">
                        <img src={img1} className="img-fluid" alt="img1"/> 
                    </div>
                    <div className="col-md-6 col-12 homeimg">
                        <img src={img1} className="img-fluid" alt="img1"/> 
                    </div>
                </div>
              
            </div>
            
        </div>
    )
}

export default Home
