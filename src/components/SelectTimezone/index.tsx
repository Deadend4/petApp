import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import Selector from "components/Selector";

const labelStyle = "original";
const timezones = {
  ...allTimezones,
  "Europe/Berlin": "Frankfurt",
};

export default function SelectTimezone(): JSX.Element {
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });

  return (
    <Selector onChange={(e) => parseTimezone(e.currentTarget.value)}>
      {options.map((option) => (
        <option key={option.abbrev} value={option.value}>
          {option.label}
        </option>
      ))}
    </Selector>
  );
}
