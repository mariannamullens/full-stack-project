export const createFriend = friend => (
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: { friend }
  })
);