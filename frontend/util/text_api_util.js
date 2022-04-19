export const searchTexts = (query) => (
  $.ajax({
      url: '/api/texts',
      method: 'GET',
      data: { query }
  })
)

export const receiveText = () => {
    return $.ajax({
      method: 'GET',
      url: '/api/texts',
      error: (err) => console.log(err)
    })
  }
