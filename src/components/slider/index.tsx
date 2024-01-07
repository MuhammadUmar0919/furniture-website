'use client'

// MultiRangeSlider.jsx
import './index.css';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const minPercent = Math.round(((minVal - min) / (max - min)) * 100);
    const maxPercent = Math.round(((maxValRef.current - min) / (max - min)) * 100);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, minVal, max, maxValRef]);

  useEffect(() => {
    const minPercent = Math.round(((minValRef.current - min) / (max - min)) * 100);
    const maxPercent = Math.round(((maxVal - min) / (max - min)) * 100);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, minValRef, max, maxVal]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = isMin ? Math.min(Number(event.target.value), maxVal - 1) : Math.max(Number(event.target.value), minVal + 1);

    if (isMin) {
      setMinVal(value);
      minValRef.current = value;
    } else {
      setMaxVal(value);
      maxValRef.current = value;
    }

    onChange({ min: minValRef.current, max: maxValRef.current });
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => handleChange(event, true)}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => handleChange(event, false)}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track"></div>
        <div ref={range} className="slider__range"></div>
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
