import React from 'react';
import Features from './Features'

export default function MainForm(props) {

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(props.selected).map((feature, idx) => (
                <Features
                    featureHash={feature + '-' + idx}
                    feature={feature}
                    key={idx}
                    state={props.state}
                    updateFeature={props.updateFeature}
                    USCurrencyFormat={props.USCurrencyFormat}
                />
            ))}
        </form>
    )

}