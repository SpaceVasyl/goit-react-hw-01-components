// import PropTypes from "prop-types"
export const Statistics = ({stats}) => (
    <section className="statistics">
<h2 className="title">Upload stats</h2>
<ul className="stat-list">
  {stats.map(stat => (<li key={stat.id}className="item">
    <span className="label">{stat.label}</span>
    <span className="percentage"> {stat.percentage} %</span></li>))}
</ul>
</section>)

// Statistics.propTypes = {
//     stats: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.string.isRequired,
//     }).isRequired,
//   };