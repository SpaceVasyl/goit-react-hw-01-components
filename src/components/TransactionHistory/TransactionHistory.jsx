export const TransactionHistory = ({transactions}) => (
<ul>
<li><span> TYPE </span><span> AMOUNT </span><span> CURRENSY </span></li>
{transactions.map(transaction =>(<li key={transaction.id}><span>{transaction.type}</span><span>{transaction.amount}</span><span>{transaction.currency}</span></li>))}
</ul>
)