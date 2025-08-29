
import ProfileCard from "./mp1/ProfileCard";
import TemperatureDisplay from "./mp2/TemperatureDisplay";

function AppDay2() {
  return (
    <div>
      <h2>Day 2 Mini Projects</h2>

      {/* Mini Project 1: Profile Card */}

      <ProfileCard name="Ranjitha V" age="20" location="Chennai, India" />
      <ProfileCard name="John Doe" age="20" location="Bangalore, India" />

     {/* Mini Project 2: Temperature Display */}

      <TemperatureDisplay temp={35} />
      <TemperatureDisplay temp={10} />
      <TemperatureDisplay temp={25} />

    </div>
  );
}

export default AppDay2;
