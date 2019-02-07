import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class Home extends React.Component {

    componentDidMount() {
        // fetch our data client side if it's not provided already on the server
        if (this.props.comments.length <= 0) {
            this.props.fetchData();
        }
    }

    render() {
        const {comments} = this.props || [];
        if (!comments) {
            return false;
        }
         return (
            <div>
                <h3> Comments</h3>
                {comments.map ( (comment, i) => {
                    return <p children={comment.name} key={i} />
                })}
            </div>
        )
    }
}


Home.serverFetch = fetchData;


const mapStateToProps = (state) => ({
    comments: state.data
})


// note this is just an object...
const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

