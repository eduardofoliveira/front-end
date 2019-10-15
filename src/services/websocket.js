import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import socketio from 'socket.io-client';

import { receiveCallRequest } from '~/store/modules/websocket/actions';

export default function Websocket() {
  const { profile } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketio('http://35.171.122.245:83');

    if (profile) {
      socket.on(`${profile.dominio}-${profile.user_basix}`, data => {
        dispatch(receiveCallRequest(data));
      });
    }

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return <div />;
}
