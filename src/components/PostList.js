import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsUsers();
	}
	render() {
		const { posts } = this.props;
		console.log(posts);
		if (posts.length === 0) {
			return <p>data is loading</p>;
		}
		// console.log(posts);
		return (
			<section>
				<ul>
					{posts.map((post) => (
						<li key={post.userId}>
							<div>{post.body}</div>
							<div>
								<UserHeader userId={post.userId} />
							</div>
						</li>
					))}
				</ul>
			</section>
		);
	}
}
const mapStateToProps = (state) => {
	// console.log(state);
	return {
		posts: state.post
	};
};

export default connect(mapStateToProps, {
	fetchPostsUsers
})(PostList);
