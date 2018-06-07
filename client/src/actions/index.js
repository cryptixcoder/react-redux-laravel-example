import axios from 'axios'

const URL = "http://localhost:8000/api"


export function fetchAllPosts() {
    return ((dispatch) => {
        dispatch({ type: 'FETCHING_POSTS' })
        axios.get(`${URL}/posts`)
            .then((response) => {
                dispatch(fetchPostsSuccess(response.data.posts))
            })
    })
}

export function fetchPostsSuccess(posts) {

    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: posts
    }
}

export function addNewPost(title, content, author) {
    return ((dispatch) => {
        axios.post(`${URL}/posts`, {
            title: title,
            content: content,
            author: author
        }).then((response) => {
            dispatch({
                type: 'NEW_POST_ADDED',
                payload: response.data.post
            })
        }).catch((err) => {
            console.error(err)
        })
    })
}

export function fetchIndividualPost(id) {
    return ((dispatch) => {
        dispatch({ type: 'FETCHING_INDIVIDUAL_POST' })
        axios.get(`${URL}/posts/${id}`)
            .then((response) => {
                console.log(response.data)
                dispatch(postFetchSuccessful(response.data.post))
            })
    })
}

export function postFetchSuccessful(post) {
    return {
        type: 'POST_FETCH_SUCCESSFUL',
        payload: post
    }
}

export function fetchPostToEdit(id) {
    return ((dispatch) => {
        axios.get(`${URL}/posts/${id}`)
            .then((response) => {
                dispatch(editPostFetched(response.data.post))
            })
    })
}

export function editPostFetched(post) {
    return {
        type: 'POST_FETCH_SUCCESSFUL',
        payload: {
            id: post.id,
            title: post.title,
            content: post.content,
            author: post.author,
            loading: false
        }
    }
}

