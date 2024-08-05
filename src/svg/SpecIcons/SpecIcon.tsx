import { specIconType } from "src/types/SpecIconTypes";
import ActivitiesIcon from "./ActivitiesIcon";
import GroomingIcon from "./GroomingIcon";
import HomecareIcon from "./HomecareIcon";
import MedcareIcon from "./MedcareIcon";
import PillIcon from "./PillIcon";
import CaretakersIcon from "./CaretakersIcon";

interface SpecIconProps {
  type: specIconType;
  color: "primary" | "white";
  width: number;
}

export default function SpecIcon({
  type,
  ...other
}: SpecIconProps): JSX.Element {
  switch (type) {
    case "activities":
      return ActivitiesIcon(other);
    case "grooming":
      return GroomingIcon(other);
    case "homeCare":
      return HomecareIcon(other);
    case "medCare":
      return MedcareIcon(other);
    case "pill":
      return PillIcon(other);
    case "caretakers":
      return CaretakersIcon(other);
    default:
      return ActivitiesIcon(other);
  }
}
