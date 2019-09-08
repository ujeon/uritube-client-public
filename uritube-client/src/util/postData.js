export const postData = async values => {
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  };
  try {
    const fetchResponse = await fetch(
      `http://13.125.149.171:8080/users/signin`,
      config
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
