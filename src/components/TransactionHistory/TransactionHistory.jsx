import css from './TransactionHistory.module.css'
import PropTypes from "prop-types";
export const TransactionHistory = ({transactions}) => (
<ul className={css.table}>
<li className={css.firstRowElement}><span>TYPE</span><span>AMOUNT</span><span>CURRENSY</span></li>
{transactions.map(transaction =>(<li key={transaction.id} className={css.element}><span>{transaction.type}</span><span>{transaction.amount}</span><span>{transaction.currency}</span></li>))}
</ul>
)

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };