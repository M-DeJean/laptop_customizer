import React from 'react';
import Summary from './Summary'
import Total from './Total'

export default function MainSummary(props) {

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {Object.keys(props.selected).map((feature, idx) => (
                <Summary
                    featureHash={feature + '-' + idx}
                    selectedOption={props.selected[feature]}
                    key={feature + '_' + idx}
                    feature={feature}
                    USCurrencyFormat={props.USCurrencyFormat}
                />
            ))}
            <Total
                USCurrencyFormat={props.USCurrencyFormat}
                selected={props.selected}
            />
        </section>
    )

}