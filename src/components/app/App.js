import { useState, useEffect } from 'react';
import './App.css';

import OrderWindow from '../orderWindow/OrderWindow';
import OrderResolt from '../orderResolt/OrderResolt';

const App = () => {
  const [tariff, setTariff] = useState([
    { name: 'economy', isSelected: false, id: '1', price: 10 },
    { name: 'comfort', isSelected: true, id: '2', price: 15 },
    { name: 'business', isSelected: false, id: '3', price: 20 },
    { name: 'premium', isSelected: false, id: '4', price: 30 },
  ]);
  const [option, setOption] = useState([
    {
      name: 'option1',
      isSelected: false,
      id: '1',
      price: 5,
      description: 'Submission further 15 km from the city',
    },
    {
      name: 'option2',
      isSelected: false,
      id: '2',
      price: 7,
      description: 'Child seat with attachments',
    },
    {
      name: 'option3',
      isSelected: false,
      id: '3',
      price: 10,
      description: 'Wedding jewelry set',
    },
    {
      name: 'option4',
      isSelected: false,
      id: '4',
      price: 20,
      description: 'Additional insurance',
    },
  ]);

  const [rate, setRate] = useState(15);
  const [timeRange, setTimeRange] = useState('2');
  const [optionsSum, setOptionsSum] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = timeRange * rate + optionsSum;
    setTotalPrice(totalPrice);

    const tariffPrice = tariff.filter((item) => item.isSelected)[0].price;
    setRate(tariffPrice);

    const optionPrice = option
      .filter((item) => item.isSelected)
      .reduce((acc, number) => acc + number.price, 0);
    setOptionsSum(optionPrice);
  }, [tariff, option, totalPrice, timeRange, rate, optionsSum]);

  const optionTogler = (id) => {
    const newOption = option.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setOption(newOption);
  };

  const onOptionsSelect = (id, option) => {
    switch (option) {
      case 'option1':
        optionTogler(id);
        break;
      case 'option2':
        optionTogler(id);
        break;
      case 'option3':
        optionTogler(id);
        break;
      case 'option4':
        optionTogler(id);
        break;
      default:
        return null;
    }
  };

  const onRateSelected = (id) => {
    const newTariff = tariff.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return { ...item, isSelected: false };
    });
    setTariff(newTariff);
  };

  const onTimeChange = (timeRange) => {
    setTimeRange(timeRange);
  };

  return (
    <div className="container">
      <OrderWindow
        onRateSelected={onRateSelected}
        onTimeChange={onTimeChange}
        onOptionsSelect={onOptionsSelect}
        option={option}
      />
      <OrderResolt
        totalPrice={totalPrice}
        timeRange={timeRange}
        rate={rate}
        optionsSum={optionsSum}
      />
    </div>
  );
};

export default App;
