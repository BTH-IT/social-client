import React from "react";
import styled from "styled-components";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const StyledMessage = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #fafafa;

  .messenger-left {
    width: 350px;
    overflow: hidden;
    border: 1px solid rgb(219, 219, 219);
    background-color: white;

    &-heading {
      border-bottom: 1px solid rgb(219, 219, 219);
      padding: 10px 20px;
      font-size: 1.6rem;
      text-align: center;
    }

    &-contact {
      height: 100%;
      overflow-y: scroll;
      cursor: pointer;
      padding-bottom: 50px;

      &_container {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 20px;
        transition: all 0.1s ease;
        &:hover {
          background-color: #f3f4f6;
        }
      }

      &_info {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        gap: 5px;

        @media screen and (max-width: 526px) {
          display: none;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    @media screen and (max-width: 786px) {
      width: 200px;
    }

    @media screen and (max-width: 526px) {
      width: 88px;
    }
  }

  .messenger-right {
    border: 1px solid rgb(219, 219, 219);
    border-left: none;
    width: 533px;
    flex: 1;
    display: flex;
    max-width: 600px;
    flex-direction: column;
    background-color: white;

    &-heading {
      padding: 8px 20px;
      border-bottom: 1px solid rgb(219, 219, 219);

      &_info {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 500;
      }

      @media screen and (max-width: 526px) {
        padding: 4px 16px;
      }
    }

    &-inbox {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 20px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      &_receive,
      &_send {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px;
        max-width: 500px;
        border: 1px solid rgb(219, 219, 219);
        color: black;
        font-size: 1.4rem;
      }

      &_receive {
        align-self: flex-start;
        border-radius: 12px 12px 12px 0;
      }

      &_send {
        align-self: flex-end;
        border-radius: 12px 12px 0 12px;
        background-color: #efefef;
      }
    }

    &-field {
      padding: 20px;
      border-top: 1px solid rgb(219, 219, 219);
      display: flex;
      gap: 5px;

      @media screen and (max-width: 526px) {
        padding: 4px;
      }
    }

    &-input {
      flex: 1;
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 786px) {
    padding-bottom: 90px;
  }
`;

const Messenger = () => {
  return (
    <StyledMessage>
      <div className="messenger-left">
        <div className="messenger-left-heading">
          <h3>Chats</h3>
        </div>
        <div className="messenger-left-contact">
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
          <div className="messenger-left-contact_container">
            <Avatar
              style={{
                width: "56px",
                height: "56px",
              }}
            ></Avatar>
            <div className="messenger-left-contact_info">
              <div className="messenger-left-contact_name">Thanh Hung</div>
              <div className="messenger-left-contact_status">Offline</div>
            </div>
          </div>
        </div>
      </div>
      <div className="messenger-right">
        <div className="messenger-right-heading">
          <div className="messenger-right-heading_info">
            <Avatar
              style={{
                width: "44px",
                height: "44px",
              }}
            ></Avatar>
            <div className="messenger-right-heading_name">Thanh Hung</div>
          </div>
        </div>
        <div className="messenger-right-inbox">
          <div className="messenger-right-inbox_receive">
            <div> 1 2 3 4 5 6 7 8 9 123 123 132 1 3131313 13 12</div>
            <div>1 minute ago</div>
          </div>
          <div className="messenger-right-inbox_send">
            <div>12312321</div>
            <div>1 minute ago</div>
          </div>
        </div>
        <div className="messenger-right-field">
          <Input
            placeholder="Typing message..."
            className="messenger-right-input"
          ></Input>
          <Button primary>Send</Button>
        </div>
      </div>
    </StyledMessage>
  );
};

export default Messenger;
