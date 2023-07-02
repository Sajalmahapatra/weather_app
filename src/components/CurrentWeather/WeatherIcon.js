import React, { useMemo } from "react";
import { ReactComponent as CloudyIcon } from "../../assets/weather/cloudy.svg";
import { ReactComponent as HazeIcon } from "../../assets/weather/haze.svg";
import { ReactComponent as HeavyRainIcon } from "../../assets/weather/heavyRain.svg";
import { ReactComponent as PartlyCloudyIcon } from "../../assets/weather/partlyCloudy.svg";
import { ReactComponent as RainIcon } from "../../assets/weather/rain.svg";
import { ReactComponent as SleetIcon } from "../../assets/weather/sleet.svg";
import { ReactComponent as SnowIcon } from "../../assets/weather/snow.svg";
import { ReactComponent as SunnyIcon } from "../../assets/weather/sunny.svg";
import { ReactComponent as ThunderstormIcon } from "../../assets/weather/thunderstorm.svg";
const WeatherIcon = (props) => {
  const codeToIconMap = [
    { range: [800], icon: SunnyIcon },
    { range: [801, 802], icon: PartlyCloudyIcon },
    { range: [803, 804], icon: CloudyIcon },
    { range: [500, 501, 520, 521, 511], icon: RainIcon },
    { range: [502, 503, 504, 522, 531], icon: HeavyRainIcon },
    { range: [300, 301, 302, 310, 311, 312, 313, 314, 321], icon: RainIcon },
    {
      range: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
      icon: ThunderstormIcon,
    },
    {
      range: [600, 601, 602, 612, 613, 615, 616, 620, 621, 622],
      icon: SnowIcon,
    },
    { range: [611], icon: SleetIcon },
    {
      range: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
      icon: HazeIcon,
    },
  ];

  let Icon = SunnyIcon;
  for (const entry of codeToIconMap) {
    if (entry.range.includes(props.code)) {
      Icon = entry.icon;
      break;
    }
  }
  return props.big ? (
    <Icon style={{ width: "100px", height: "100px" }} />
  ) : (
    <Icon />
  );
};
export default WeatherIcon;
