import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../store/actions/actions";
import "./Displayer.scss"

class Displayer extends React.Component {
    constructor(props) {
        super(props);
        this.sendItemIndex = this.sendItemIndex.bind(this);
    }
    sendItemIndex(index) {
        this.props.removeItem(index)
    }
    render() {
        if (this.props.reminders.length > 0) {
            return (
                <section className="displayer">
                    {
                        this.props.reminders.map(
                            (reminder, index) => {
                                return (
                                    <div key={index}>
                                        <div className="text-content">
                                            {reminder.text}
                                            <br />
                                            {reminder.date}
                                            <button
                                                onClick={
                                                    () => this.sendItemIndex(index)
                                                }
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </section>
            );
        } else {
            return (
                <section className="empty-section"></section>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        reminders: state.reminders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: (index) => dispatch(removeItem(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Displayer);
