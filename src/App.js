import {Component} from 'react'
import Popup from './components/Popup'

import {
  MainContainer,
  Header,
  ScoreContainer,
  Heading,
  Para,
  ScorePara,
  GameContainer,
  Button,
  Image,
  RulesButtonContainer,
  GameResultContainer,
  PlayAgainButton,
  YouWonButtonContainer,
  SmallContainer,
  Container,
  ParaForResult,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestId: 'paperButton',
  },
]

export default class App extends Component {
  state = {
    isGameStarted: false,
    activeSymbolId: choicesList[0].id,
    randomSymbolId: choicesList[1].id,
    score: 0,
    resultText: 'jj',
    clickedImageObject: choicesList[0],
    randomImageObject: choicesList[1],
  }

  playAgainFunc = () => {
    this.setState(prevState => ({
      isGameStarted: !prevState.isGameStarted,
    }))
  }

  function = () => {
    const {activeSymbolId, randomSymbolId, score} = this.state

    const randomImageObject = choicesList.find(
      object => object.id === randomSymbolId,
    )

    const clickedImageObject = choicesList.find(
      object => object.id === activeSymbolId,
    )

    this.getResultText = () => {
      let text = ''
      if (
        clickedImageObject.id === 'ROCK' &&
        randomImageObject.id === 'SCISSORS'
      ) {
        text = 'YOU WON'
      } else if (
        clickedImageObject.id === 'SCISSORS' &&
        randomImageObject.id === 'PAPER'
      ) {
        text = 'YOU WON'
      } else if (
        clickedImageObject.id === 'PAPER' &&
        randomImageObject.id === 'ROCK'
      ) {
        text = 'YOU WON'
      } else if (clickedImageObject.id === randomImageObject.id) {
        text = 'IT IS DRAW'
      } else if (
        clickedImageObject.id === 'SCISSORS' &&
        randomImageObject.id === 'ROCK'
      ) {
        text = 'YOU LOSE'
      } else if (
        clickedImageObject.id === 'PAPER' &&
        randomImageObject.id === 'SCISSORS'
      ) {
        text = 'YOU LOSE'
      } else if (
        clickedImageObject.id === 'ROCK' &&
        randomImageObject.id === 'PAPER'
      ) {
        text = 'YOU LOSE'
      }
      return text
    }

    const text = this.getResultText()

    this.setState({
      resultText: text,
      clickedImageObject,
      randomImageObject,
    })

    if (text === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (text === 'YOU LOSE') {
      if (score > 0) {
        this.setState(prevState => ({
          score: prevState.score - 1,
        }))
      }
    }
  }

  someSymbolClicked = id => {
    const randomIndex = Math.floor(Math.random() * 3)

    const randomId = choicesList[randomIndex].id

    this.setState(
      prevState => ({
        activeSymbolId: id,
        randomSymbolId: randomId,
        isGameStarted: !prevState.isGameStarted,
      }),
      this.function,
    )
  }

  container = () => (
    <GameContainer>
      {choicesList.map(object => (
        <li key={object.id}>
          <Button
            data-testid={object.dataTestId}
            onClick={() => {
              this.someSymbolClicked(object.id)
            }}
            type="button"
          >
            <Image alt={object.id} src={object.imageUrl} />
          </Button>
        </li>
      ))}
    </GameContainer>
  )

  gameContainer = () => {
    const {
      randomSymbolId,
      resultText,
      clickedImageObject,
      randomImageObject,
    } = this.state
    console.log(randomSymbolId)

    return (
      <GameResultContainer>
        <Container>
          <SmallContainer>
            <Heading>YOU</Heading>
            <Image alt="your choice" src={clickedImageObject.imageUrl} />
          </SmallContainer>
          <SmallContainer>
            <Heading>OPPONENT</Heading>
            <Image alt="opponent choice" src={randomImageObject.imageUrl} />
          </SmallContainer>
        </Container>
        <YouWonButtonContainer>
          <ParaForResult>{resultText}</ParaForResult>
          <PlayAgainButton onClick={this.playAgainFunc} type="button">
            PLAY AGAIN
          </PlayAgainButton>
        </YouWonButtonContainer>
      </GameResultContainer>
    )
  }

  render() {
    const {isGameStarted, score} = this.state

    return (
      <MainContainer>
        <Header>
          <Heading width="50px">ROCK PAPER SCISSORS</Heading>
          <ScoreContainer>
            <Para>Score</Para>
            <ScorePara>{score}</ScorePara>
          </ScoreContainer>
        </Header>
        {isGameStarted ? this.gameContainer() : this.container()}
        <RulesButtonContainer>
          <Popup />
        </RulesButtonContainer>
      </MainContainer>
    )
  }
}
