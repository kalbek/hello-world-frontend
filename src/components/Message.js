import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGeneratedMessage } from '../redux/messageSlice';
import HelloWorld from './HelloWorld';

const Message = () => {
  const dispatch = useDispatch();
  const randomMessage = useSelector((state) => state.messages.body);

  const generateMessageHandler = () => {
    dispatch(getRandomGeneratedMessage());
  };

  useEffect(() => {
    dispatch(getRandomGeneratedMessage());
  }, [dispatch]);
  return (
    <div className="main_container">
      <HelloWorld />
      <h1>Random Message</h1>
      <p>{randomMessage}</p>
      <button type="button" onClick={generateMessageHandler}>
        Generate
      </button>
    </div>
  );
};

export default Message;
