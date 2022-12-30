import { FC, useState } from 'react';

export const Timer: FC = () => {
  const [min, setMin] = useState<number>(2);
  const [sec, setSec] = useState<number>(0);
  const [milSec, setMilSec] = useState<number>(0);

  const timeBack = () => {
    if (min === 0) {
      setMin(1);
      setSec(59);
      setMilSec(59);
    } else {
      const milliseconds = milSec === 0 ? 60 : milSec - 1;
      setMilSec(milliseconds);
      if (milSec === 0) {
        const seconds = sec === 0 ? 60 : sec - 1;
        setSec(seconds);
      }
      if (sec === 0) {
        const minute = min - 1;
        setMin(minute);
      }
    }
  };
  setTimeout(() => {
    timeBack();
  }, 10);

  return (
    <div className="time">
      <div>
        <span>{min}:</span>
        <span>{sec ? sec : '00'}:</span>
        <span>{milSec ? milSec : '00'}</span>
      </div>
    </div>
  );
};
