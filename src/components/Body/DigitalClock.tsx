import { useEffect, useState } from "react";
import { styled } from "styled-components";

const DigitalClock = () => {
  const getBangkokTime = () => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Bangkok",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());
  };

  const [time, setTime] = useState<string>(getBangkokTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getBangkokTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SContainer>
      {time}
      <STimezoneText>Time Zone: Asia/Bangkok (UTC+7)</STimezoneText>
    </SContainer>
  );
};
export default DigitalClock;
const SContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: end;
`;

const STimezoneText = styled.div`
  font-size: 0.5rem;
  margin-top: 5px;
  color: #ffcc00;
`;
