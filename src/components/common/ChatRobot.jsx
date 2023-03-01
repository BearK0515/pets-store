import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import chatRobot from '../../assets/icons/icon_FB_chat.png';
import { MessengerChat } from 'react-messenger-chat-plugin';

const StyledChatRobot = styled.div`
  .top-button {
    position: fixed;
    bottom: 40px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    cursor: pointer;
    z-index: 999;
  }

  .transformUp {
    animation: messageMoveUp 0.1s ease-in 1 alternate;
    transform: translate(0, -10px);
  }

  @keyframes messageMoveUp {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -10px);
    }
  }

  @media screen and (max-width: 768px) {
    .top-button {
      position: fixed;
      right: -5px;
      bottom: 60px;
    }

    .transformUp {
      animation: messageMoveUp 0.1s ease-in 1 alternate;
      transform: translate(0, -25px);
    }

    @keyframes messageMoveUp {
      from {
        transform: translate(0, 0);
      }
      to {
        transform: translate(0, -25px);
      }
    }
  }
`;

export default function ChatRobot() {
  const [scrollup, setScrollup] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrollup(true);
      } else {
        setScrollup(false);
      }
    });
  }, []);

  return (
    <>
      <StyledChatRobot>
        {scrollup ? (
          <button className='top-button transformUp'>
            {/* <img className='chat-robot' src={chatRobot} alt='logo-big' /> */}
            <MessengerChat
              pageId='110288728664781'
              language='zh_TW'
              themeColor={'#469189'}
              debugMode={true}
            />
          </button>
        ) : (
          <button className='top-button'>
            {/* <img className='chat-robot' src={chatRobot} alt='logo-big' /> */}
            <MessengerChat
              pageId='110288728664781'
              language='zh_TW'
              themeColor={'#469189'}
              debugMode={true}
            />
          </button>
        )}
      </StyledChatRobot>
    </>
  );
}
