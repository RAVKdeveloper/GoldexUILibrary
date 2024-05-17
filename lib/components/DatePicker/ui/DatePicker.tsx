import { FC, useEffect, useState } from 'react';
import s from '../assets/style.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from 'goldex-icon-library';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
type ModeType = 'days' | 'months' | 'years';

interface DatePickerProps {
  date: Date;
  setDate: (date: Date) => void;
  toggleShow?: (isShow: boolean) => void;
}

export const DatePicker: FC<DatePickerProps> = ({
  date,
  setDate,
  toggleShow,
}) => {
  const [month, setMonth] = useState<number>(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [dayNum, setDayNum] = useState(date.getDate());
  const [yearsPage, setYearsPage] = useState(0);
  const [mode, setMode] = useState<ModeType>('days');

  const generateDays = () => {
    const date = new Date(year, month, 1);
    const days = [];
    const weekDay = date.getDay();

    for (let i = weekDay; i > 1; i--) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - i);
      days.push(newDate);
    }

    for (let i = 0; i <= 42 - weekDay; i++) {
      const newDate = new Date(date);
      newDate.setDate(i);
      days.push(newDate);
    }

    return days;
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      return;
    }
    setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      return;
    }
    setMonth(month + 1);
  };

  const onClickDay = (date: Date) => {
    setDayNum(date.getDate());
    setMonth(date.getMonth());
    if (toggleShow) toggleShow(false);
    setDate(date); // Ensure the setDate is called with the selected date
  };

  const generateYears = () => {
    const num = year - yearsPage * 12;
    const roundedYear = Math.ceil((num + 1) / 10) * 10;
    const years = [];

    for (let i = 11; i >= 0; i--) {
      const date = new Date();
      date.setFullYear(roundedYear - i);
      years.push(date);
    }

    return years;
  };

  useEffect(() => {
    const newDate = new Date(year, month, dayNum);
    setDate(newDate);
  }, [year, month, dayNum]);

  const yearsArr = generateYears();
  const daysArr = generateDays();

  return (
    <div className={s['date-picker']}>
      <div className={s['date-picker__header']}>
        <div className={s['date-picker__prev']}>
          <div
            className={`${s['date-picker__double-arrow']}`}
            onClick={() => {
              if (mode === 'days') {
                setYear(year - 1);
              } else {
                setYearsPage(yearsPage + 1);
              }
            }}
            aria-label="Previous Year"
          >
            <ChevronLeftIcon />
            <div style={{ marginLeft: -8 }}>
              <ChevronLeftIcon />
            </div>
          </div>
          {mode === 'days' && (
            <div
              className={s['date-picker__arrow']}
              onClick={prevMonth}
              aria-label="Previous Month"
            >
              <div style={{ marginLeft: 5 }}>
                <ChevronLeftIcon />
              </div>
            </div>
          )}
        </div>
        <div className={s['date-picker__date']}>
          <span
            className={s['date-picker__month']}
            onClick={() => setMode('months')}
          >
            {MONTHS[month]}
          </span>
          <span
            className={s['date-picker__year']}
            onClick={() => setMode('years')}
          >
            {year}
          </span>
        </div>
        <div className={s['date-picker__next']}>
          {mode === 'days' && (
            <div
              className={s['date-picker__arrow']}
              onClick={nextMonth}
              aria-label="Next Month"
            >
              <div style={{ marginRight: 5 }}>
                <ChevronRightIcon />
              </div>
            </div>
          )}
          <div
            className={s['date-picker__double-arrow']}
            onClick={() => {
              if (mode === 'days') {
                setYear(year + 1);
              } else {
                setYearsPage(yearsPage - 1);
              }
            }}
            aria-label="Next Year"
          >
            <ChevronRightIcon />
            <div style={{ marginLeft: -8 }}>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </div>
      {mode === 'days' && (
        <div className={s['date-picker__days']}>
          {[...WEEK_DAYS, ...daysArr].map((item) => {
            return typeof item === 'string' ? (
              <span key={item} className={`${s.item} ${s['week-day']}`}>
                {item}
              </span>
            ) : (
              <span
                key={item.toDateString()}
                className={`${s.item} ${
                  item.getMonth() === month ? null : s['gray']
                } ${
                  item.getDate() === dayNum && item.getMonth() === month
                    ? s['active']
                    : null
                }`}
                onClick={() => onClickDay(item)}
              >
                {item.getDate()}
              </span>
            );
          })}
        </div>
      )}
      {mode === 'months' && (
        <div className={s['date-picker__months']}>
          {MONTHS.map((str, i) => (
            <span
              key={str}
              onClick={() => {
                setMonth(i);
                setMode('days');
              }}
              className={`${i === month ? s['active'] : null}`}
            >
              {str}
            </span>
          ))}
        </div>
      )}
      {mode === 'years' && (
        <div className={s['date-picker__years']}>
          {yearsArr.map((date) => {
            const isActive =
              year === date.getFullYear() &&
              yearsArr.map((year) => year.getFullYear()).includes(year);

            return (
              <span
                key={date.getFullYear()}
                className={`${isActive ? s['active'] : null}`}
                onClick={() => {
                  setYear(date.getFullYear());
                  setMode('months');
                }}
              >
                {date.getFullYear()}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
