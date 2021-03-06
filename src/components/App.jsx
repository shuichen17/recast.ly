import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoPlayer: exampleVideoData[0],
      videoPlayLists: exampleVideoData
      
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(video) {
    this.setState(
      {currentVideoPlayer: video}
    )
  }
    
  
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideoPlayer} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.videoPlayLists} handleClick={this.handleClick}/></h5></div>
          </div>
        </div>
      </div>
    )
  }

}







// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//window.App = App;
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );