export const postData = async (values, url, callback) => {
  if (url === 'users/signin') {
    var config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    };
  } else {
    config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: window.localStorage.id
      },
      body: JSON.stringify(values)
    };
  }
  try {
    const fetchResponse = await fetch(
      `http://13.125.149.171:8080/${url}`,
      config
    );
    const data = await fetchResponse.json();
    callback(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
