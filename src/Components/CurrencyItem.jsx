import React from "react";
import "../ComponentStyles/CurrencyList.module.css";

const CurrencyItem = ({charCode, name, nominal, value}) => {
    console.log(charCode)
    console.log(name)
    return (
        <table>
            <tbody>
                <tr>
                    <td>{charCode}</td>
                    <td>{name}</td>
                    <td>{nominal}</td>
                    <td>{value}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default CurrencyItem;