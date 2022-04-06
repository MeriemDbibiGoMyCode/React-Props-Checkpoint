import logo from "./logo.svg";
import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";

function App() {
  function handleName(fullName) {
    alert(`Bonjour ${fullName}`);
  }

  return (
    <div>
      <ProfileComponent
        fullName={"Meriem Dbibi"}
        bio={"Diplômée de l'ESPRIT, je suis à la recherche d'une opportunité professionnelle dans le domaine de l'informatique pour mettre à proﬁt mes compétences acquises durant ma formation universitaire et mes expériences professionnelles."}
        profession={"ingénieur"}
        handleName={handleName}
      >   
      </ProfileComponent>
    </div>
  );
}

export default App;
