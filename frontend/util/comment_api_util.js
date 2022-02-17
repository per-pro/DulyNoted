export const fetchComments = () => {
    return $.ajax({
      method: GET,
      url: '/api/comments',
      error: (err) => console.log(err)
    })
  }
