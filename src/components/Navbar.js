import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import $ from 'jquery'
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";

function Navbar({searchsub}) {
    const [search, setsearch] = useState()
    useEffect(()=>{
        $(".mbtn").click(function(){
            $(".menulist").addClass("menusub")
            $(".menu").addClass("rbtn")
        })
        $(".cbtn").click(function(){
            $(".menulist").removeClass("menusub")
            $(".menu").removeClass("rbtn")
        })
        $(".ak").click(function(){
            $(".menulist").removeClass("menusub")
            $(".menu").removeClass("rbtn")
        })

    },[])
    return (
        <div className="nav1">
            <div className="logo">
                <h2><NavLink to="/">Logo</NavLink></h2>
            </div>
            <div className="menulist">
                <ol>
                    {/* <li className="ak"><NavLink to="/">Explore</NavLink></li> */}
                    <li className="ak"><NavLink to="/explore">Explore</NavLink></li>
                    {/* <li>Trading</li> */}
                    <li className="ak"><NavLink to="/create">NFT Creator</NavLink></li>
                    <li className="ak"><NavLink to="/mycollection">My Collections</NavLink></li>
                    {/* <li className="ak"><NavLink to="/csdoge">CSDoge</NavLink></li> */}
                    <li > <div className="exploreinput mx-5">
                    <input type="text" placeholder="Search Listing" onChange={(e)=>setsearch(e.target.value)}/>
                    <div className="sicon" onClick={()=>searchsub(search)} style={{cursor:'pointer'}}>
                        <AiOutlineSearch className="ak" />
              

                    </div>
                    


                </div></li>
                    {/* <li>Bell</li> */}
                    {/* <li>Login</li> */}
                </ol>
            </div>
            <div className="menu">
                <AiOutlineMenu className="mbtn"/>
                <AiOutlineClose className="cbtn" />
            </div>
            
        </div>
    )
}

export default Navbar
