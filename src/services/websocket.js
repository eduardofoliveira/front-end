import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import socketio from 'socket.io-client';

import { receiveCallRequest } from '~/store/modules/websocket/actions';

export default function Websocket() {
  const { profile } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketio('http://35.171.122.245:83');
    socket.on(`${profile.dominio}-${profile.user_basix}`, data => {
      dispatch(receiveCallRequest(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, profile.dominio, profile.user_basix]);

  return <div />;
}
