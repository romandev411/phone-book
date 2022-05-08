import queryString from 'query-string';

export const getUsers = options => {
  const finalOptions = {
    ...options,
    results: 100,
    format: 'json',
    seed: 'JS-DFE2021-1',
  };

  const query = queryString.stringify(finalOptions);

  return fetch(`https://randomuser.me/api/?${query}`)
    .then(data => {
      return data.json();
    })
    .then(data => {
      return data.results;
    });
};
