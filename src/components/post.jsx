import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {
    state = {
        post: {

            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"

        },
        loaded: false
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments/' + this.props.match.params.postID)
            .then((res) => {


                this.setState({

                    post: res.data,
                    loaded: true
                })

            })

    }
    render() {
        if (this.state.loaded === false) {
            return (
                <div className="conatiner">
                    LOADING.....
                </div>
            )
        }
        else {
            let post = this.state.post;
            //console.log(post)
            return (
                // <div className="container">
                //     <div>{post.name}</div>
                //     <div>{post.email}</div>
                //     <p>{post.body}</p>
                // </div>
                <React.Fragment>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="col">
                        <div class="col s8 m5 center">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">{post.name}</span>
                                    <span class="card-title">{post.email}</span>
                                    <p>{post.body}</p>
                                </div>
                                <div class="card-action">
                                    <a href="/">GO Back</a>
                                    <a href="#">Like this post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

    }
}
export default Post;