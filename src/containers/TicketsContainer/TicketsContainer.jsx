import React from "react";
import Tickets from "../../pages/Tickets/Tickets";
import { connect } from "react-redux";

function TicketsContainer(props) {
  return <Tickets ticketsData={props.ticketsData} />;
}

let mapStateToProps = (state) => ({
  ticketsData: state.ticketsStore.ticketsData,
});
export default connect(mapStateToProps, {})(TicketsContainer);
