const appId = 'OX5sTwXK5eU2vy1wOpri';

const showDataInvolvement = async (query) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default showDataInvolvement;
