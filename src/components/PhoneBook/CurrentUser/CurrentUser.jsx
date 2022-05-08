import React from 'react';

const CurrentUser = ({ user }) => {
  return (
    <div>
      <h2>
        {user.name.first} {user.name.last}
      </h2>

      <img src={user.picture.medium} alt={user.name.last} width='70' />

      <p>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
      </p>
      <p>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </div>
  );
};

export default CurrentUser;
