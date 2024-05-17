import { BsFillPersonFill } from "react-icons/bs";
import { ILogItem } from "../../../types";
import { author, date, logItemWrap, message } from "./LogItem.css";

type Props = {
  log: ILogItem;
};

const LogItem = ({ log }: Props) => {
  const timeOffset = new Date(Date.now() - Number(log.logTimestamp));
  const showOffsetTime = `${
    timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""
  }
  ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s ago` : ""}
  ${timeOffset.getSeconds() === 0 ? `just now` : ""}
  `;
  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {log.logAuthor}
      </div>
      <div className={message}>{log.logMessage}</div>
      <div className={date}>{showOffsetTime}</div>
    </div>
  );
};

export default LogItem;
