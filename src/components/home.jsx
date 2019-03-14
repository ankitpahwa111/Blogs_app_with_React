import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


let arr=[];
class Home extends Component {

    componentDidMount() {
        if(this.props.posts.length===1){
            console.log('in componentDidMount')
            axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                arr=res.data.slice(0,10);
                this.props.UpdateState(res.data.slice(0,10));
                console.log(this.props)
            })
        }
        else{
            arr=this.props.posts;
        }
       
            
    }
    render() {
        console.log(this.props.posts)
        let posts = this.props.posts.map((post) => {
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
        return (
            <div className="center" >
               
                POSTS:
            {posts}
            </div>
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
        
        UpdateState : (arr)=>{
            console.log(arr);
            dispatch({type : 'NewPosts' , posts : arr})
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Home);