import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DatePicker } from '../ui/DatePicker';

describe('DatePicker Component', () => {
  const renderDatePicker = (
    date: Date,
    setDate = jest.fn(),
    toggleShow = jest.fn()
  ) => {
    return render(
      <DatePicker date={date} setDate={setDate} toggleShow={toggleShow} />
    );
  };

  it('renders DatePicker with initial date', () => {
    const date = new Date(2023, 5, 15);
    renderDatePicker(date);

    expect(screen.getByText('Jun')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  it('navigates to the next month', () => {
    const date = new Date(2023, 5, 15);
    renderDatePicker(date);

    const nextMonthButton = screen.getByLabelText('Next Month');
    fireEvent.click(nextMonthButton);

    expect(screen.getByText('Jul')).toBeInTheDocument();
  });

  it('navigates to the previous month', () => {
    const date = new Date(2023, 5, 15);
    renderDatePicker(date);

    const prevMonthButton = screen.getByLabelText('Previous Month');
    fireEvent.click(prevMonthButton);

    expect(screen.getByText('May')).toBeInTheDocument();
  });

  it('navigates to the next year', () => {
    const date = new Date(2023, 5, 15);
    renderDatePicker(date);

    const nextYearButton = screen.getByLabelText('Next Year');
    fireEvent.click(nextYearButton);

    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('navigates to the previous year', () => {
    const date = new Date(2023, 5, 15);
    renderDatePicker(date);

    const prevYearButton = screen.getByLabelText('Previous Year');
    fireEvent.click(prevYearButton);

    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('allows selecting a date', () => {
    const date = new Date(2023, 5, 15);
    const setDate = jest.fn();
    renderDatePicker(date, setDate);

    const dayButton = screen.getByText('16');
    fireEvent.click(dayButton);

    expect(setDate).toHaveBeenCalledWith(new Date(2023, 5, 16));
  });

  it('toggles visibility when a date is selected', () => {
    const date = new Date(2023, 5, 15);
    const toggleShow = jest.fn();
    renderDatePicker(date, jest.fn(), toggleShow);

    const dayButton = screen.getByText('16');
    fireEvent.click(dayButton);

    expect(toggleShow).toHaveBeenCalledWith(false);
  });
});
