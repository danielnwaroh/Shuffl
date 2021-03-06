import React, { Component } from 'react';
import BrowseRoomContainer from '../../Components/BrowseRoomContainer';
import GenreList from '../../Components/GenreList';

class Browse extends Component {

    state = {
        genre:"",
        isChosen:true
    }
   
   changeGenre = (genre) => {
        this.setState({genre:genre, isChosen:!this.state.isChosen});
   };

   resetState = () => { 
            this.setState({genre:"", isChosen:true});
   }
   
   render() {

        return(
            <React.Fragment>
            <div className='parent'>
                <div className='bottom'>
                    <div className ="page-title">
                        <h1>Browse</h1>
                    </div>
                    <div className="sup-category">
                        <div className="sub-category">
                            <div id="filterID" onClick={this.resetState}>Genres</div>
                        </div>
                    </div>

                    {
                        this.state.isChosen?
                        <GenreList changeGenre={this.changeGenre}/>:<BrowseRoomContainer genre={this.state.genre} setRoomId ={this.props.setRoomId} socket={this.props.socket}/>
                    }
                </div>
            </div>
            </React.Fragment>

        )
    }
}

export default Browse