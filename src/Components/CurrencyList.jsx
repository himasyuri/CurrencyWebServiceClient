import React from "react";
import "../ComponentStyles/CurrencyList.module.css";

const CurrencyList = ({ currencies }) => {
    return (
        <div>
            <h1>Курс валют ЦБ</h1>
            <table>
                <thead>
                    <tr>
                        <th>Charcode</th>
                        <th>Name</th>
                        <th>Nominal</th>
                        <th>Value, RUB</th>
                    </tr>
                </thead>
                <tbody>
                    {currencies.map((currency, index) => {
                        return (
                            <tr key={index}>
                                <td>{currency.charCode}</td>
                                <td>{currency.name}</td>
                                <td>{currency.nominal}</td>
                                <td>{currency.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyList
