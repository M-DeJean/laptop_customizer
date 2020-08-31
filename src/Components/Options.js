import React from 'react'
import slugify from 'slugify';


export default function Options(props) {
    return (
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                checked={props.item.name === props.state.selected[props.feature].name}
                onChange={e => props.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
          </label>
        </div>
    );
}