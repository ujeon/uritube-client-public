export const getData = async (value, callback) => {
  try {
    const data = await (await fetch(
      `http://13.125.149.171:8080/${value}`
    )).json();
    callback(data);
  } catch (e) {
    console.log(e);
  }
};
