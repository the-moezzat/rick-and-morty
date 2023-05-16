import {CharacterCard} from "./components/characterCard/CharacterCard";
import {CharacterCardSkeleton} from "./components/characterCard/CharacterCardSkeleton";
import {Search} from "./components/characterList/Search";
import {Dropdown} from "./components/characterList/Dropdown";

function App() {
    return (
        <>
            <div>
                <CharacterCardSkeleton count={1}/>
                <CharacterCard name={"Rick"} gender={"male"} id={1}
                               imageUrl={"https://rickandmortyapi.com/api/character/avatar/180.jpeg"} species={"human"}
                               status={"alive"}/>
                <Search/>
                <Dropdown
                    size={"medium"}
                    label={"status"}
                    items={{
                        alive: "alive",
                        dead: "dead",
                        unknown: "unknown"
                    }}
                    sx={{
                        minWidth: "120px"
                    }}/>
            </div>
        </>
    );
}

export default App;
