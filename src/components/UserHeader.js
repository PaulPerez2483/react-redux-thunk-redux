import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
		// console.log(this.props.userId);
	}
	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return (
			<ul>
				<li>{user.name}</li>
			</ul>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.find((user) => user.id === ownProps.userId)
		// user: state
	};
};

export default connect(mapStateToProps, {
	fetchUser
})(UserHeader);
