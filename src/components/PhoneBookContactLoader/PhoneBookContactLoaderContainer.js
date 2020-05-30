import { connect } from 'react-redux';
import { getIsLoadingStatus } from '../../redux/isLoadingReducer/isLoadingSelectors';
import PhoneBookContactLoader from './PhoneBookContactLoader';

const mapStateToProps = state => ({
  isLoading: getIsLoadingStatus(state),
});

export default connect(mapStateToProps)(PhoneBookContactLoader);
