import React, { useEffect, useReducer } from 'react';
import { getUsers } from '../../api';
import { reducer } from './reducer';
import UserList from './UserList/UserList';
import CurrentUserItem from './CurrentUser/CurrentUser';

const PhoneBook = () => {
  const [state, dispach] = useReducer(reducer, {
    users: null,
    mapUsers: null,
    currentUser: null,
  });

  const load = () => {
    getUsers()
      .then(data => {
        dispach({
          type: 'USERS_LOAD',
          users: data,
        });
      })
      .catch(() => {
        dispach({
          type: 'USERS_DNT_LOAD',
        });
      })
      .finally(() => {});
  };

  const checkCurrentUrer = id => {
    dispach({
      type: 'CURRENT_USER',
      id,
    });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {state.users && (
        <UserList users={state.users} checkCurrent={checkCurrentUrer} />
      )}
      <div
        style={{
          width: '300px',
          flexShrink: '0',
          border: '1px solid',
          padding: '10px',
          margin: '1em',
        }}
      >
        {state.currentUser && <CurrentUserItem user={state.currentUser} />}
      </div>
    </div>
  );
};

export default PhoneBook;
