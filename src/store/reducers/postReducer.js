import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes';

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Matheus Brito',
            email: 'maatheusbrito@hotmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Kamilla Coutinho',
                    comment: 'Lindo!'
                },
                {
                    nickname: 'Ana',
                    comment: 'Maravilhoso!'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Kamilla Coutinho Brito',
            email: 'kamillaCoutinho1@hotmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: [
                {
                    nickname: 'Matheus Brito',
                    comment: 'QQ isso hein!'
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(action.payload.comment)
                        } else {
                            post.comments = [action.payload.comment];
                        }
                    }
                    return post
                })
            }
        default:
            return state;
    }
}

export default reducer;