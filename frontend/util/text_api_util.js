export const fetchTexts = () => {
    return $.ajax({
      method: GET,
      url: '/api/texts',
      error: (err) => console.log(err)
    })
  }
