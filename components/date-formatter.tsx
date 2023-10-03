import { parseISO } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return new Intl.DateTimeFormat("fa").format(date);
};

export default DateFormatter;
