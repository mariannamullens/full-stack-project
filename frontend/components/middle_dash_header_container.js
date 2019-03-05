import { connect } from 'react-redux';
import MiddleDashHeader from './middle_dash_header';
import { totalBalance, balancePerFriend, oweAmount, owedAmount } from '../reducers/balance_aggregates_selector';

const mapStateToProps = state => ({
  totalBalance: totalBalance(state),
  balancePerFriend: balancePerFriend(state),
  oweAmount: oweAmount(state),
  owedAmount: owedAmount(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MiddleDashHeader);