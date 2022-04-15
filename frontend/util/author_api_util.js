export const getAuthors = (letter) => {
    return $.ajax({
        url: '/api/authors',
        method: 'GET',
        data: { letter }
    })
}

export const getAuthor = (authorId) => (
    $.ajax({
        url: `/api/authors/${authorId}`,
        method: 'GET'
    })
)