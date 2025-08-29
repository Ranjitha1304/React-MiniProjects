import PersonalBio from "./mp1/PersonalBio";
import GreetingApp from "./mp2/GreetingApp";

function AppDay1() {
  return (
    <div>
      <h2>Day 1 Mini Projects</h2>

      {/* Mini Project 1 */}
      <PersonalBio 
        name="Ranjitha V"
        age="20"
        bio="A passionate learner exploring React and Django from scratch to Advanced."
      />

        <GreetingApp name="Ranjitha"/>

    </div>
  );
}

export default AppDay1;
