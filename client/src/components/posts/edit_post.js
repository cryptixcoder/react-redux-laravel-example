import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class EditPost extends Component {
    state = {
        title: "",
        content: "",
        author: ""
    }

    componentWillMount() {
        this.props.fetchPostToEdit(this.props.match.params.id);

        const { title, content, author } = this.props.individualPost.post

        this.setState({
            title: title,
            content: content,
            author: author
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.addNewPost(this.state.title, this.state.content, this.state.author);

        this.props.history.push('/');
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h3>Edit Post</h3>
                                <form onSubmit={this.handleSubmit.bind(this)} method="post">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" value={this.props.title} onChange={(e) => this.setState({ title: e.target.value })} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Content</label>
                                        <textarea type="text" className="form-control" onChange={(e) => this.setState({ content: e.target.value })}>
                                            {this.props.content}
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input type="text" value={this.props.author} onChange={(e) => this.setState({ author: e.target.value })} className="form-control" />
                                    </div>
                                    <input type="submit" value="Save" className="btn btn-primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        editingPost: state.editingPost
    }
}

export default connect(mapStateToProps, actions)(EditPost)