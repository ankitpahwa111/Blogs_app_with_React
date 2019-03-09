import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
// let HomeName = () => {
//     return (
//         <span className='center'>POSTS : </span>
//     )
// }


class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        let posts = this.state.posts.map((post) => {
            return (
                <React.Fragment>
                    <Link to={'/' + post.id}>
                    <div className="post card-panel blue lighten-5">
                        <div className="card-title">
                            <h5 className="purple-text">
                                Author : {post.name}
                            </h5>

                        </div>
                        <div className="card-title black-text">Email : {post.email}</div>

                        <p className="black-text">{post.body}</p>
                        
                    </div>
                    </Link>
                </React.Fragment >

            )

    })
    return(
            <div className = "center" >
            {/* <span className='center'>POSTS : </span> */ }
                POSTS:
            { posts }
            </div>
        )
        

    }


}
export default Home;