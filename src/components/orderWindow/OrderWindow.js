import PropTypes from 'prop-types';
import Rate from '../rate/Rate';
import HouseRange from '../hoursRange/HoursRange';
import Options from '../options/Options';

const OrderWindow = ({
  onRateSelected,
  onTimeChange,
  onOptionsSelect,
  option,
}) => {
  return (
    <form className="form form-left" action="#">
      <Rate onRateSelected={onRateSelected} />
      <HouseRange onTimeChange={onTimeChange} />
      <Options onOptionsSelect={onOptionsSelect} option={option} />
    </form>
  );
};

OrderWindow.propTypes = {
  onRateSelected: PropTypes.func,
  onTimeChange: PropTypes.func,
  onOptionsSelect: PropTypes.func,
  option: PropTypes.array,
};

export default OrderWindow;
