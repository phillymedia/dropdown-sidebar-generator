import React from 'react';

const FlexCol = (props) => {
    return (
        <div className={'flexRow ' + (props.class ? props.class : "")}>
            <div className="flexSpacer">&zwj;</div>
            <div className={"flexMainCol " + (props.maincolclass ? props.maincolclass : "")}>
                {props.children}
            </div>
            <div className="flexSpacer">&zwj;</div>
        </div>
    )
}

export default FlexCol;
