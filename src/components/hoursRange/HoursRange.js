import { useState } from 'react'

const HouseRange = ({ onTimeChange }) => {
  const [rangeValue, setRangeValue] = useState('2')

  const onChangeValue = (e) => {
    setRangeValue(e.target.value)
    onTimeChange(e.target.value)
  }

  return (
    <div className="form__item">
      <div className="form__item-header">
        How many hours do we rent (minimum 2 hours)
      </div>
      <div className="slider">
        <input
          className="slider__input"
          type="range"
          name="time"
          id="time"
          step="1"
          min="2"
          max="96"
          value={rangeValue}
          onChange={onChangeValue}
        />
        <output className="slider__output" id="volume" htmlFor="time">
          {rangeValue}
        </output>
      </div>
    </div>
  )
}

export default HouseRange
