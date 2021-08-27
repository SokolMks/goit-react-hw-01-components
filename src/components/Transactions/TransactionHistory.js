import React from 'react';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
      <table className={style.transactionHistory}>
        <thead className={style.title}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={style.conten}>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
export default TransactionHistory