import * as AuthorAPIUtil from "../util/author_api_util";



export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS"
export const RECEIVE_AUTHOR = "RECEIVE_AUTHOR"

export const receiveAuthors = (authors) => ({
    type: RECEIVE_AUTHORS,
    authors
})

export const receiveArtist = (author) => ({
    type: RECEIVE_ARTIST,
    author
})

export const requestAuthor = (authorId) => (dispatch) => (
    AuthorAPIUtil.fetchAuthor(authorId)
        .then(author => dispatch(receiveAuthor(author)))
)

export const requestAuthors = (letter) => (dispatch) => (
    AuthorAPIUtil.fetchAuthors(letter)
        .then(authors => dispatch(receiveAuthors(authors)))
)