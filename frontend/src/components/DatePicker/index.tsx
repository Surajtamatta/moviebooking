import React, { useRef, useState } from "react";
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker";
import { enGB } from "date-fns/locale";
import { CustomCalendar } from "@/styles/pages/buytickets";

const DatePickerComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [selectedDates, setSelectedDates] = useState<{
    startValue: Date | null;
    endValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: []
  });

  const handleChange = (d: DatepickerEvent) => {
    console.log(d[0]);
    const [startValue, endValue, rangeDates] = d;
    setSelectedDates((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };
console.log(selectedDates.startValue)
  return (

      <CustomCalendar
        ref={ref}
        onChange={handleChange}
        locale={enGB}
        startValue={selectedDates.startValue}
        endValue={selectedDates.endValue}
        classNames={{ dayLabel: "hello" }}
      />
  
  );
};

export default DatePickerComponent;
