import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

type NullableDate = Dayjs | null | undefined;

export function useBasicDatePicker(initialValue?: Date) {
  const [value, setValue] = useState<NullableDate>(
    initialValue ? dayjs(initialValue) : null
  );

  function handleChange(
    newValue: NullableDate,
    changeHandler: (date: Date | undefined) => void
  ) {
    setValue(newValue);
    changeHandler(newValue ? (newValue.toDate?.() ?? undefined) : undefined);
  }

  return { value, handleChange };
}
