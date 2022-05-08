const UserList = ({ users, checkCurrent }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', flexGrow: '1' }}>
      {users.map(el => {
        const [letter, arrUsers] = el;

        return (
          <li
            key={letter}
            style={{
              width: '200px',
              margin: '5px',
              paddingBottom: '20px',
              border: '1px solid',
              listStyle: 'none',
            }}
          >
            <h3
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                lineHeight: 2,
                borderBottom: '1px solid',
              }}
            >
              {letter}
            </h3>

            <ul>
              {arrUsers.map(el => {
                return (
                  <li key={el.email}>
                    <button onClick={() => checkCurrent(el.id)}>
                      {el.name.last} {el.name.first}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
