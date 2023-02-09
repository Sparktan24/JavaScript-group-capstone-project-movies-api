//  TVMaze API
const showData = async (query) => {
  const url = `https://api.tvmaze.com/shows/${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//  Involvment API
const appId = 'OX5sTwXK5eU2vy1wOpri';
const showDataInvolvement = async (query) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const postComment = async (showId, userName, comments) => {
  const resFetch = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ item_id: showId, username: userName, comment: comments }),
  });
  const data = await resFetch.json();
  //  const { status } = resFetch;
  //return { data, status };
  return data;
};

export { showData, showDataInvolvement, postComment };
