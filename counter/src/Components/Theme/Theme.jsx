import { BsPaintBucket } from "react-icons/bs";
import ColorButtons from "./ColorButtons";
import "./Theme.css";

let Theme = () => {
  return (
    <div className="theme">
      <BsPaintBucket />
      <ColorButtons />
    </div>
  );
};

export default Theme;
