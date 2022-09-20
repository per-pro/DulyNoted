// export const searchTexts = (query) => (
//   $.ajax({
//       url: '/api/texts',
//       method: 'GET',
//       data: { query }
//   })
// )

export const receiveText = (textId) => {
    return $.ajax({
      method: 'GET',
      url: `/api/texts/${textId}`,
      error: (err) => console.log(err)
    })
  }

export const receiveAllTexts = () => {
    return $.ajax({
      method: 'GET',
      url: '/api/texts',
      error: (err) => console.log(err)
})
}
