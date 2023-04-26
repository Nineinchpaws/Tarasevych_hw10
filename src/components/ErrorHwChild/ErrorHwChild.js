import React from "react";

export default class ErrorHwChild extends React.Component {
    state = {
        isError: false
    }

    componentWillUnmount() {
        throw new Error('Error message!');
    }

    createError() {
        try {
            throw new Error('Error in createError!');
        } catch(err) {
            console.log(err);
            this.setState({ isError: true });
        }
    }

    render() {
        return (
            <div>
                ErrorHwChild

                <button onClick={this.createError.bind(this)}>
                    createError
                </button>
                {this.state.isError && <h5>Something went wrong</h5>}
            </div>
        )
    }
}