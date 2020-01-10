import styled from 'styled-components';

let wrapperHeight='56px';

export const HeaderWrapper = styled.div`
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    a.logo{
        height:${wrapperHeight};
        width:100px;
        display:block;
        float:left;
    }
    a.logo .img{
        width:100%;
    }

    .nav{
        margin:0 auto;
        height:${wrapperHeight};
        max-width:1024px;
    }

    .nav li{
        float:left;
        line-height:${wrapperHeight};
        padding:0 20px
    }

    a.login{
        height:${wrapperHeight};
        line-height:${wrapperHeight};
        width:100px;
        display:block;
        float:right;
        
    }
`