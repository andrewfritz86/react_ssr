import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class NearbyStores extends React.Component {
  componentDidMount() {
    // fetch our data client side if it's not provided already on the server
    if (this.props.stores.length <= 0) {
      this.props.fetchData();
    }
  }

  render() {
    const { stores } = this.props || [];
    if (!stores) {
      return false;
    }
    return (
      <div>
        <h3> Nearby Stores </h3>
        {stores.map((store, i) => {
          return <p children={store.name} key={i} />;
        })}
      </div>
    );
  }
}

NearbyStores.serverFetch = fetchData;

const mapStateToProps = state => ({
  stores: state.prefetched
});

// note this is just an object...
const mapDispatchToProps = {
  fetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyStores);
