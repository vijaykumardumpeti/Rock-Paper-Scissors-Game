import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import {
  PopupContainer,
  Button,
  RulesImage,
  ImageAndButtonContainer,
  ButtonClose,
} from './StyledComponents'

import './index.css'

import 'reactjs-popup/dist/index.css'

const PopUp = () => (
  <PopupContainer>
    <Popup
      className="popup-container"
      modal
      trigger={<Button type="button">RULES</Button>}
    >
      {close => (
        <ImageAndButtonContainer>
          <ButtonClose type="button" onClick={() => close()}>
            <RiCloseLine />
          </ButtonClose>

          <RulesImage
            alt="rules"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          />
        </ImageAndButtonContainer>
      )}
    </Popup>
  </PopupContainer>
)
export default PopUp
