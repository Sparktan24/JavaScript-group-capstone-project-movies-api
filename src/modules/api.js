//  TVMaze API
const showData = async (query) => {
  const url = `https://api.tvmaze.com/shows/${query}`;
  // const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OX5sTwXK5eU2vy1wOpri/likes';
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
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: showId, username: userName, comment: comments }),
  });
  const { status } = response;
  return status;
};

export {
  showData, showDataInvolvement, postComment, getLikes,
};
