import React from "react";
import Post from './Post';
import axios from "axios";
import "../index.css";
import sample from "../images/sample.jpg";

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResult: [],
        }

    }

    handleSearch(){
        const keyword = document.getElementById("search-input").value;
        axios.post('/posts/search', {
            query: keyword,
        }).then(response => this.handleResponse(response));
    }

    renderPosts(arr) {
        const postArr = arr.map((post, index) => {
            return (
                <Post
                    key={post.id}
                    img={sample}
                    title={post.title}
                    author={post.author}
                    description={post.description}
                    date={post.date}
                    like={post.like}
                    category={post.category}
                    handleLike={() => this.handleLike(index)}
                />
            )
        });
        return <ul>{postArr}</ul>;
    }

    handleLike(i) {
        let newPosts = [...this.state.searchResult];
        let post = newPosts[i];
        post.like = post.like + 1;

        axios.patch(`/posts/${post.id}`, { "like": post.like })
            .catch(err => console.log(err.response.data));
        this.setState({
            posts: newPosts
        })
    }

    handleResponse = (response) => {
        const newPosts = response.data.map(element => {
            const post = {
                "id": element._id,
                "author": element.author,
                "title": element.title,
                "description": element.description,
                "date": element.date,
                "like": element.like,
                "category": element.category
            }
            return post;
        });
        this.setState({
            searchResult: newPosts
        })
    }

    componentDidMount() {
        document.getElementById("search_button").onclick = () => this.handleSearch();
        const keyword = document.getElementById("search-input").value;
        if(keyword != ''){ this.handleSearch();}


    }

    render() {

        return (
            <div className="post-list">
                {/* <button className="button" onClick={this.props.handleFetch}>Fetch!</button> */}
                {this.renderPosts(this.state.searchResult)}
            </div>
        )
    }
}