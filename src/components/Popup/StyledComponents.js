import Styled from 'styled-components'

export const PopupContainer = Styled.div`




`

export const heading = Styled.h1``

export const Button = Styled.button`
border: 0px none transparent;
background-color: white;
color: #223a5f;
font-family:"Bree Serif";

align-self: flex-end;

font-size: 22px;
border-radius: 5px;

`
export const RulesImage = Styled.img`

margin: 10px;
width: 750px;
padding: 10px;

@media all and (max-width: 767px){
    width: 190px;
}

`
export const ImageAndButtonContainer = Styled.div`


display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;


`
export const Popup = Styled.div`
background-color: red;
`
export const ButtonClose = Styled.button`

box-shadow: 0px 0px 25px 0px;
border: 0px none transparent;
border-radius: 3px;

text-align: center;
padding: 3px;
line-height: 0.5px;

`
