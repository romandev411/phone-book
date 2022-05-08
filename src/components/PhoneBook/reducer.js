export function reducer (state, action) {
  switch (action.type) {
    case 'USERS_LOAD': {
      const { users } = action;

      return {
        ...state,
        users: sortMapUsers(users),
        mapUsers: mapUsersToId(users),
      };
    }
    case 'USERS_DNT_LOAD': {
      return state;
    }
    case 'CURRENT_USER': {
      const { id } = action;

      return {
        ...state,
        currentUser: state.mapUsers.get(id),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

function mapUsersToId (users) {
  const userMap = new Map();

  users.forEach(el => {
    const date = new Date(el.dob.date);

    const formatDate = `${date.getDay()}.${date.getMonth() +
      1}.${date.getFullYear()}`;

    userMap.set(el.id, { ...el, formatDate });
  });

  return userMap;
}

function sortMapUsers (users) {
  const userMap = new Map();

  users.forEach(el => {
    const {
      name: { last: lastName },
    } = el;

    const letter = lastName[0].toLowerCase();
    const userArr = [];

    if (!userMap.get(letter)) {
      userArr.push(el);
      userMap.set(letter, userArr);
    } else {
      userMap.get(letter).push(el);
    }
  });

  return [...userMap].sort((a, b) => {
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
}
