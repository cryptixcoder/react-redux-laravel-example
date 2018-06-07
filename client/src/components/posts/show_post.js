import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'
const ReactMarkdown = require('react-markdown')


class ShowPost extends Component {
    componentWillMount() {
        this.props.fetchIndividualPost(this.props.match.params.id);
    }

    render() {
        const { post, error, loading } = this.props.individualPost

        if (loading === true) {
            return (<div>Im loading</div>)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Link to={{
                            pathname: `/`
                        }}>Back</Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2>{post.title}</h2>
                        <ReactMarkdown source={post.content} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        individualPost: state.posts.individualPost
    }
}

export default connect(mapStateToProps, actions)(ShowPost)

