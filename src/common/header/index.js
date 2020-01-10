import React,{ Component } from 'react';
import { HeaderWrapper } from './style';
import nav_log from '../../static/images/nav-logo.png';

class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <a className={'logo'} href={'/'}>
                    <img className={'img'} src={nav_log} alt=""/>
                </a>

                <a href={'/'} className={'login'}>登陆</a>
                <ul className={'nav'}>
                    <li className={'sy'}><a href={'/'}>首页</a></li>
                    <li className={'xz'}><a href={'/'}>下载App</a></li>
                </ul>
            </HeaderWrapper>
        )
    }
}

export default Header;