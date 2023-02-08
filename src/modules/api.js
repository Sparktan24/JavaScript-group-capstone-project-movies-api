const showData = async (query) => {
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const addLike = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OX5sTwXK5eU2vy1wOpri/likes';
  fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};

const getLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OX5sTwXK5eU2vy1wOpri/likes';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export {showData, addLike, getLikes};

