import Styled from 'styled-components'

export const MainContainer = Styled.div`
    padding: 30px;
    margin-top:-10px;
    background-color:#223a5f;
    height: 100vh;

    color: white;
    font-family: "Bree Serif";

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
   
    //align-items
   

`

export const Header = Styled.nav`
    padding: 20px;
    border: 4px solid white;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;



`
export const ScoreContainer = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    border-radius: 10px;
    color: #223a5f;

    width: 120px;

    margin-top: -8px;
    margin-bottom: -8px;


`

export const Para = Styled.p`
    font-size: 22px;
    color: #223a5f;
    font-family: "Bree Serif";
    line-height: 0.5px;
`
export const ScorePara = Styled.p`
    font-size: 42px;
    color: #223a5f;
    font-family: "Roboto";
    line-height: 0.5px;
    margin-top: 20px;

`
export const GameContainer = Styled.ul`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
    list-style-type: none;

    max-width: 550px;
    align-self: center;
    margin-top: 30px;
    @media all and (max-width: 767px){
        min-width: 450px;
        margin-top: 90px;
        margin-right: 20px;
    }
    
`

export const Button = Styled.button`
    border: 0px none transparent;
    background-color: transparent;


`
export const Image = Styled.img`
    height: 230px;

    @media all and (max-width: 767px){
        height: 160px;
    }
`
export const RulesButtonContainer = Styled.div`
    align-self: flex-end;

    @media all and (max-width: 767px){
        margin-top: 30px;
    }


`
export const GameResultContainer = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


    
`
export const PlayAgainButton = Styled.button`

    background-color: white;
    color: #223a5f;
    font-family: "Bree Serif";

    border: 0px none transparent;
    padding: 10px;
    border-radius: 10px;
    width: 160px;


`
export const Heading = Styled.h1`

    width: ${props => props.width};

    margin-top: -8px;
    margin-bottom: -8px;

    @media all and (max-width: 767px){
        font-size: 16px;
    }
    
`
export const YouWonButtonContainer = Styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 120px;

`
export const SmallContainer = Styled.div`

    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    min-height: 200px;
`
export const Container = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    min-width: 700px;
    @media all and (max-width: 767px){
        min-width: 350px;
    }    


`
export const ParaForResult = Styled.p`
font-family: "Bree Serif"
`
