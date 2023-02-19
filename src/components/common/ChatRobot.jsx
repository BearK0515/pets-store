import React, { useState, useEffect } from "react";
import styled from "styled-components";
import chatRobot from "../../assets/icons/icon_FB_chat.png";
import MessengerChat from "../MessengerChat";

const StyledChatRobot = styled.div`
  .top-button {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  .transformUp {
    animation: messageMoveUp 0.1s ease-in 1 alternate;
    transform: translate(0, -60px);
  }

  .chat-robot {
    width: 36px;
    height: 36px;
  }

  @keyframes messageMoveUp {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -60px);
    }
  }
`;

export default function ChatRobot() {
  const [scrollup, setScrollup] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
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
            <img className='chat-robot' src={chatRobot} alt='logo-big' />
          </button>
        ) : (
          <button className='top-button'>
            <img className='chat-robot' src={chatRobot} alt='logo-big' />
          </button>
        )}
      </StyledChatRobot>
      <MessengerChat />
    </>
  );
}
