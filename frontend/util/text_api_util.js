export const searchTexts = (query) => (
  $.ajax({
      url: '/api/texts',
      method: 'GET',
      data: { query }
  })
)

export const receiveText = (textId) => {
    return $.ajax({
      method: 'GET',
      url: '/api/:textId',
      error: (err) => console.log(err)
    })
  }
