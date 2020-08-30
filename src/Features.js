import React from 'react';
import slugify from 'slugify';
import Options from './Options'


export default function Features(props) {
    return (
        <fieldset className="feature" key={props.featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {props.features[props.feature].map(item => (
                <Options
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