import React from "react";
import { connect } from "react-redux";
import { clearReminder } from "../../store/actions/actions";
import "./Cleaner.scss";

class Cleaner extends React.Component {
    render() {
        return (
            <button
                type="button"
                onClick={this.props.clearReminder}
            >
                Clear Reminder
            </button>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearReminder: () => dispatch(clearReminder())
    }
}

export default connect(null, mapDispatchToProps)(Cleaner);
