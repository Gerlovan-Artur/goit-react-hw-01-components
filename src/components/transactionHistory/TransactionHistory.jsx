import { PropTypes } from 'prop-types';
import styles from '../transactionHistory/TransactionHistory.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.type}>Type</th>
          <th className={styles.amount}>Amount</th>
          <th className={styles.currency}>Currency</th>
        </tr>
      </thead>
      {items.map(items => (
        <tbody key={items.id}>
          <tr>
            <td>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};