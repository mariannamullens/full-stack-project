import { connect } from 'react-redux';
import MiddleDashHeader from './middle_dash_header';
import { totalBalance, oweAmount, owedAmount } from '../../reducers/balance_aggregates_selector';

const mapStateToProps = state => ({
  totalBalance: totalBalance(state),
  oweAmount: oweAmount(state),
  owedAmount: owedAmount(state),
});

export default connect(mapStateToProps)(MiddleDashHeader);