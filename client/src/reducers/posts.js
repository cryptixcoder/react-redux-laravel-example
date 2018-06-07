import * as actions from '../actions'

const INITIAL_STATE = {
    postsIndex: {
        posts: [],
        error: null,
        loading: false
    },
    individualPost: {
        post: null,
        error: null,
        loading: true
    },
    editingPost: {
        id: null,
        title: null,
        content: null,
        author: null,
        loading: true
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCHING_POSTS':
            return { ...state, postsIndex: { posts: [], error: "", loading: true } }
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, postsIndex: { posts: action.payload, error: "", loading: false } }
        case 'FETCHING_INDIVIDUAL_POST':
            return { ...state, individualPost: { post: null, error: "", loading: true } }
        case 'POST_FETCH_SUCCESSFUL':
            return { ...state, individualPost: { post: action.payload, error: "", loading: false } }
        case 'FETCHED_POST_TO_EDIT':
            return { ...state, editingPost: { id: action.payload.id, title: action.payload.title, content: action.payload.content, author: action.payload.author, loading: false } }
        default:
            return state;
    }
}