import React from 'react';
import slugify from 'slugify';
import Options from './Options'
import FEATURES from '../STORE'

export default function Features(props) {
    return (
        <fieldset className="feature" key={props.featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {FEATURES[props.feature].map((item, i) => (
                <Options
                    key={i}
                    itemHash={slugify(JSON.stringify(item))}
                    item={item}
                    state={props.state}
                    updateFeature={props.updateFeature}
                    feature={props.feature}
                    USCurrencyFormat={props.USCurrencyFormat}
                />
            ))}
        </fieldset>
    );
}