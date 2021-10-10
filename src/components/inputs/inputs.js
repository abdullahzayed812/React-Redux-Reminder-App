import React from "react";
import { connect } from "react-redux";
import { addReminder } from "../../store/actions/actions";
import "./Inputs.scss"

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            date: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.sendReminder = this.sendReminder.bind(this);
        // this.handleDate = this.handleDate.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    sendReminder() {
        const text = this.state.text;
        const date = this.state.date;
        this.props.addReminder(text, date);
        this.setState({
            text: "",
            date: ""
        })
    }
    // handleDate(date) {
    //     const someDay = new Date(date);
    //     const today = new Date();
    //     const resultBySecond = (today.getTime() - someDay.getTime()) / 1000;
    //     const day = resultBySecond / 60 * 60 * 24;
    //     const result = resultBySecond / day;
    //     return result;
    // }
    render() {
        return (
            <form>
                <input
                    type="text"
                    name="text"
                    value={this.state.text}
                    placeholder="Enter What Will I Remind You"
                    onChange={this.handleChange}
                />
                <input
                    type="datetime-local"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <button
                    type="button"
                    onClick={this.sendReminder}
                >
                    Add Reminder
                </button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addReminder: (text, date) => dispatch(addReminder(text, date))
    }
}

function mapStateToProps(state) {
    return {
        reminders: state.reminders
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
