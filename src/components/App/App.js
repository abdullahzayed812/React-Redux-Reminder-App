import React from "react";
import Inputs from "../inputs/inputs";
import Displayer from "../Displayer/Displayer";
import Cleaner from "../Cleaner/Cleaner";
import { Provider } from "react-redux";
import store from "../../store/store";
import "./App.scss";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <section className="body">
                    <section className="container">
                        <h1>Welcome In Reminder Application</h1>
                        <img src="/images/reminders.png" alt="" />
                        <Inputs />
                        <Displayer />
                        <Cleaner />
                    </section>
                </section>
            </Provider>
        )
    }
}

export default App;