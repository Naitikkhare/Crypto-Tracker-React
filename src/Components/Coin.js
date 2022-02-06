import React from 'react'

export default function Coin(props) {
    let coin_prop = props.coin_prop;
    let price_change_color = coin_prop.price_change_percentage_24h > 0 ? "#38b000" : "red";
    return(
        <div className="coinn">

            <div className="img-name-symbol">

                <span className="img-name">

                <div><img src={coin_prop.image} alt={coin_prop.id} /></div>
                <div className="coin-name">{coin_prop.name}</div>

                </span>
                
                <span className="coin-symbol">{coin_prop.symbol}</span>

            </div>
            <div className="Details">
                <p className="Price">
                    ${coin_prop.current_price < 1 ? coin_prop.current_price : coin_prop.current_price.toLocaleString()}
                </p>

                <p className="24h-max">
                    ${coin_prop.high_24h < 1 ? coin_prop.high_24h : coin_prop.high_24h.toLocaleString()}
                </p>

                <p className="24h-min">
                    ${coin_prop.low_24h < 1 ? coin_prop.low_24h : coin_prop.low_24h.toLocaleString()}
                </p>

                <p className="pice-change" style = {{color : price_change_color}}>
                    {coin_prop.price_change_percentage_24h}%
                </p>

                <p className="Mrk-cap">
                    ${coin_prop.market_cap.toLocaleString()}
                </p>
            </div>
        </div>
    )
}