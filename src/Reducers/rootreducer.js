const initState = {
    posts: [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
    ],

}
const rootReducer = (state = initState, action) => {
    console.log(action)
    switch(action.type){
        case 'DELETE_POST' : {
            console.log(action)
            action.id=Number(action.id)
            return {
                ...state,
                posts : state.posts.filter(
                    post=> post.id!==action.id
                )
            }
        }
        case 'NewPosts' : {
            const newPosts=action.posts;
            //console.log(newPosts);
            return {
                ...state,
                posts : newPosts
            }
        }
    }
     return state;
}
export default rootReducer;