import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Calendar from 'react-native-calendar-picker';

import Color from '../../assets/color';
import Styles from './styles';

const CalendarBox: React.FC = () => {
  const [startDatePicked, setStartDatePicked] = useState<Date | null>();
  const [endDatePicked, setEndDatePicked] = useState<Date | null>(null);

  const minDate = new Date();
  const maxDate = new Date(minDate.getFullYear() + 1, 12, 31);

  const startDate = startDatePicked
    ? startDatePicked?.toString()
    : ''
  const endDate = endDatePicked
    ? endDatePicked?.toString()
    : ''

  const formatDate = (date: string) => {
    const newDate = date.replace('12:00:00 GMT-0300', '');

    return newDate;
  }

  const onChange = (date: any, type: string) => {
    if (type === 'END_DATE') {
      setEndDatePicked(date);
    } else {
      setStartDatePicked(date);
      setEndDatePicked(null);
    }
  }

  return (
    <View style={Styles.main}>
      <Calendar
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor={Color.whiteBlur}
        selectedDayColor={Color.gradientDark}
        weekdays={[]}
        selectedDayTextColor={Color.white}
        textStyle={{
          fontFamily: 'Roboto',
          color: Color.black,
        }}
        onDateChange={onChange}
      />
      <View style={Styles.dateView}>
        <Text>{formatDate(startDate)}</Text>
        <Text>{formatDate(endDate)}</Text>
      </View>
    </View>
  )
};

export default CalendarBox;
