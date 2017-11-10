import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBciZGWAQ0MpIRavSK-VQkeaLhQka57O2I';

// Create a new component. This component should produce some HTML.

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        YTSeach({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0]    
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})} />
            </div>
        );
    }
}


//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));