import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chatApi from "../../api/chatApi";
import { useAppSelector } from "../../app/hooks";
import ChatBox, { MessageSendType } from "./ChatBox";
import Conversation, { ChatType } from "./Conversation";
import { io, Socket } from "socket.io-client";

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
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow: scroll;

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
  const navigate = useNavigate();
  const loginSuccess = useAppSelector((state) => state.auth.isLoggedIn);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [chats, setChats] = useState<ChatType[]>([]);
  const [currentChat, setCurrentChat] = useState<ChatType | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const [sendMessage, setSendMessage] = useState<any>(null);
  const [receiveMessage, setReceiveMessage] = useState<any>(null);
  const socket = useRef<Socket>();

  useEffect(() => {
    if (socket && currentUser) {
      socket.current = io("https://bth-social-socket.herokuapp.com/");
      socket.current.emit("new-user-add", currentUser._id);
      socket.current.on("get-users", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (sendMessage !== null && socket.current) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("receive-message", (data) => {
        setReceiveMessage(data);
      });
    }
  }, []);

  useEffect(() => {
    if (!loginSuccess) {
      navigate("/login", { replace: true });
    }
  }, [loginSuccess, navigate]);

  useEffect(() => {
    async function fetchChats() {
      try {
        if (currentUser?._id) {
          const { data } = await chatApi.userChats(currentUser._id);
          setChats(data);
        }
      } catch (error) {}
    }

    fetchChats();
  }, [currentUser?._id]);

  if (!loginSuccess) {
    navigate("/login");
    return null;
  }

  const checkOnline = (chat: ChatType) => {
    const chatMember = chat.members.find(
      (member) => member !== currentUser?._id
    );
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <StyledMessage>
      <div className="messenger-left">
        <div className="messenger-left-heading">
          <h3>Chats</h3>
        </div>
        <div className="messenger-left-contact">
          {chats.map((chat) => (
            <Conversation
              onClick={() => setCurrentChat(chat)}
              data={chat}
              currentUserId={currentUser?._id}
              online={checkOnline(chat)}
              key={chat._id}
            ></Conversation>
          ))}
        </div>
      </div>
      <div className="messenger-right">
        <ChatBox
          chat={currentChat}
          currentUserId={currentUser?._id}
          setSendMessage={(data: any) => setSendMessage(data)}
          receiveMessage={receiveMessage}
        ></ChatBox>
      </div>
    </StyledMessage>
  );
};

export default Messenger;
