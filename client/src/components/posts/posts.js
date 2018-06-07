import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'

class Posts extends Component {
    componentWillMount() {
        this.props.fetchAllPosts()
        console.log(this.props.postsIndex)
    }

    renderRow(posts) {
        return posts.map((post) => {
            console.log(post)
            return (
                <tr>
                    <td><Link to={{
                        pathname: `/posts/${post.id}/edit`
                    }}>{post.title}</Link>
                    </td>
                    <td>{post.author}</td>
                    <td>
                        <Link to={{
                            pathname: `/posts/${post.id}`
                        }}>View</Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const { posts, loading, error } = this.props.postsIndex
        console.log(this.props.postsIndex)
        if (loading === true) {
            return (
                <div>Loading</div>
            )
        }
        return (

            < div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h3>Posts</h3>
                                <Link to={{
                                    pathname: '/posts/create'
                                }}>Create New Post</Link>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.renderRow(posts)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        postsIndex: state.posts.postsIndex
    }
}

export default connect(mapStateToProps, actions)(Posts)