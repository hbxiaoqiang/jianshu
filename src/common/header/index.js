import React,{ Component } from 'react';
import { HeaderWrapper } from './style';
import nav_log from '../../static/images/nav-logo.png';

class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <a href={'/'}>
                    <img className={'img'} src={nav_log} alt=""/>
                </a>
            </HeaderWrapper>
        )
    }
}

export default Header;