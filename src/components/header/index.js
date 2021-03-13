import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './index.css'
export default function header(){
    return(
        <div className="header">
            <div className="header__logo">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="logo"/>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__option">
                <span className="header__ooptionOne">Hellow User</span>
                <span className="header__optionTwo">Sign In or Out</span>
            </div>
        </div>
    )
}
