const showData = async (query) => {
  const url = `https://api.tvmaze.com/shows/${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default showData;
