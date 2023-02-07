const showData = async (query) => {
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default showData;