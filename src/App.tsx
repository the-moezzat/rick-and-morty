import {CharacterCard} from "./components/characterCard/CharacterCard";

function App() {
  return (
    <>
      <div>
          <CharacterCard name={"Rick"} gender={"male"} id={1} imageUrl={"https://rickandmortyapi.com/api/character/avatar/180.jpeg"} spices={"human"} status={"alive"}/>
      </div>
    </>
  )
}

export default App
