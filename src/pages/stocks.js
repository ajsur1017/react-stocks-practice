import React from "react"
import {Link} from "react-router-dom"
import stocks from "../data/stocks";

const Stocks = (props) => {
    return stocks.map((stock) => {
        return <Link to={`/price/${stock.symbol}`}>
            <h2>{stock.name}</h2>
        </Link>
    })
}

export default Stocks
