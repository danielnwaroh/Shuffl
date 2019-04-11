import React, { Component } from 'react';
import CreateRoom from '../../Components/CreateRoom';
import RoomContainer from '../../Components/RoomContainer';
class Room extends Component {
	state = {
		createRoom: false
	};

	operation = () => {
		const { createRoom } = this.state;
		this.setState({ createRoom: !createRoom });
	};

	render() {
		return (
			<div className="parent">
				<div className="bottom">
					<div className="page-title">
						<h1>Rooms</h1>
					</div>
					<div className="RoomButtonDiv">
						<button onClick={this.operation} className="RoomButton">
							+
						</button>
					</div>
                    <RoomContainer setRoomId={this.props.setRoomId} socket = {this.props.socket}/>
					{this.state.createRoom ? (
						<CreateRoom UserId={this.props.UserId} setRoomId={this.props.setRoomId} socket = {this.props.socket} operation={this.operation}/>
					) :null

					}
				</div>
			</div>
		);
	}
}

export default Room;
