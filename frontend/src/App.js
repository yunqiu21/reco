import React from 'react';
import Post from './Components/Post'
import SearchBox from './Components/SearchBox';
import sample from './images/sample.jpg';
import sample_drink from './images/drinks_sample.jpg';
import background from './images/background.jpg'
import background2 from './images/background2.jpg'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postArr: [],
      result: [],
      filter: false,
    }
  }

  renderPosts(arr) {
    let postArr = arr.map((post, index) => {
      return (
        <Post key={index} title={post.title}
          url={post.url} description={post.description}
          user={post.user}
        />
      )
    });
    return <div className='rowC'>{postArr}</div>
  }

  clicked = () => {
    return <h1>Hello World!</h1>
  }

  addNewPost(url, description, catagory, user) {
    // tbd: upload currently add to foods.
    let posts = this.state.postArr;
    posts.unshift({
      url: url,
      description: description,
      category: catagory,
      user: user,
    });
    this.setState({
      postArr: posts,
      filter: true,
    });
  }

  handleSearch() {
    const posts = this.state.postArr;
    // console.log(document.getElementById("search-input").value);
    const toSearch = document.getElementById("search-input").value;
    const results = posts.filter(post => post.description.toLowerCase().includes(toSearch.toLowerCase()));
    this.setState({
      result: results,
      filter: true,
    })
  }
  //filters to show only the ones inside the catagory.
  filter_cat(category) {
    const posts = this.state.postArr;
    const results = posts.filter(post => post.category === category);
    this.setState({
      result: results,
      filter: true,
    })
  }

  render() {
    //tbd: currently displays foods.
    return (
      <div>
        <SearchBox handleSearch={() => this.handleSearch()}
          addNewPost={() => this.addNewPost(sample, "I had icecream!", "food", "Eric")}
          filter_food={() => this.filter_cat("food")}
          filter_drinks={() => this.filter_cat("drinks")}
        />
        {this.renderPosts(this.state.result)}
      </div>
    );
  }
}

export default App;
