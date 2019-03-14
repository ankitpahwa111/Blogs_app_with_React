import React, { Component } from 'react';
import {connect} from 'react-redux';
class Post extends Component {
    
     handleDeletePost=()=>{
        console.log('here')
        const id=this.props.match.params.postID;
        this.props.DeletePost(id);
        this.props.history.push('/')
    }
    render() {
        
        
            console.log(this.props)
            const id = this.props.match.params.postID;
            let post = this.props.posts[Number(id)-1];
            console.log(post)
            return (
                
                <React.Fragment>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="col">
                        <div className="col s8 m5 center">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{post.name}</span>
                                    <span className="card-title">{post.email}</span>
                                    <p>{post.body}</p>
                                </div>
                                <div className="card-action">
                                    {/* <button onClick={this.props.history.push('/')}></button> */}
                                    <button onClick={this.handleDeletePost}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        

    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        DeletePost: (id) => {
            dispatch({type: 'DELETE_POST' , id:id})
        }
        // UpdateState : (dispatch)=>{
        //     dispatch({type : 'NewPosts' , posts : arr})
        // }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Post);