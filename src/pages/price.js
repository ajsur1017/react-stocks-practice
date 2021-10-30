import { useState, useEffect } from "react"
import stocks from "../data/stocks"

const Loaded = (props) => {
    const {stock} = props;
    return (
        <div>
            <h1>{stock.name}/{stock.symbol}</h1>
            <h2>${stock.lastPrice}</h2>
        </div>
    )
}
const NotFound = () => {
    return <h1>Stonk not found</h1>
}
const Price = (props) => {
    const symbol = props.match.params.symbol
    const stock = stocks.find((stock) => {
        return stock.symbol === symbol
    })
    return stock ? <Loaded stock={stock}/> : <NotFound/>
}

export default Price