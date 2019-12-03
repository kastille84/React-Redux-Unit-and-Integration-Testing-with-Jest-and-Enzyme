import React from 'react';
import Header from './components/header';
import Headline from './components/headline'
import SharedButton from './components/button'
import ListItem from './components/listItem'
import {connect} from 'react-redux';
import {fetchPosts} from './actions'

import './app.scss';

const tempArr = [{
  fName: "Edwin",
  lName: "Martin",
  email: "joelboo@gmail.com",
  age: 24,
  onlineStatus: true
}]

const initialState = {
  hideBtn: false
}
class App extends React.Component {

  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
    this.state = {
      ...initialState
    }
  }
  
  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState()
  }

  exampleMethod_updateState() {
    const {hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }
  exampleMethod_returnsAValue(number) {
    return number + 1;
  }
  render() {
    const {posts} = this.props;
    const {hideBtn} = this.state;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          {!hideBtn &&
            <SharedButton {...configButton} />
          }
          {posts.length >0 &&
            <div>
              {posts.map((post,idx)=>{
                  const {title, body} = post;
                  const configListItem = {
                    title,
                    desc: body
                  }
                  return (
                    <ListItem key={idx} {...configListItem} />
                  )
                })
              }
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
