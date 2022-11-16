import styled, {css} from 'styled-components'


export const BodySidebar = styled.div`
    
    display: inline-block;
    background-color:  ${props => props.theme.colors.primary};
    height: 100vh;
    width: 60px;
    transition: 0.5s;
    position: fixed;
    z-index: 100;

    &:hover {
        width: 250px;
    }


    &:hover #menu-icon {
        display: none;
    }


    &:hover #list {
        display: initial;
        text-align: center;
    }


    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    #list {
        display: none;
        list-style-type: none;
        font-weight: bold;
    }
    
    #list li {
        font-size: 18px;
        margin-top: 20px;
        padding: 10px;
        width: 150px;
        text-align: center;
        border-bottom: 1px solid transparent;
        color:  #fff;
        transition: 0.2s;
    
    }
    
    #list li:hover {
        border-bottom: 1px solid #fff;
    }
    
    #menu-icon {
        width: 40px;
        color:  #fff;
    }
    
    a {
        text-decoration: none;
    }
    
`

