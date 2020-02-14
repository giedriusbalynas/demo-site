import React from 'react';
import {connect} from "react-redux";
import {returnBack} from "../../redux/actions";
import {useHistory} from "react-router-dom";

const mapStateToProps = state => {
    const {paths} = state;
    return {'stateHistory': paths.history};
};

function BackButton(props) {
    let browserHistory = useHistory();

    let handleReturn = () => {
        if (props.stateHistory[props.stateHistory.length - 2] !== undefined) {
            browserHistory.push(props.stateHistory[props.stateHistory.length - 2]);
            props.returnBack();
        } else {
            browserHistory.push('/');
        }
    };

    return (
        <div>
            <button className="back-button" onClick={handleReturn}>&larr; BACK</button>
        </div>
    );
}

export default connect(
    mapStateToProps,
    {returnBack}
)(BackButton);

