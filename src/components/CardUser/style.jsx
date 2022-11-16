import styled, {css} from 'styled-components'


export const Card = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 80px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary};
    color:  ${props => props.theme.colors.text};
    font-weight: bold;
    font-size: 16px;
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    
    &:hover{
        transform: scale(1.02);
    }
    
    span{
        position: relative;
        margin-left: 50px;
    }

`

