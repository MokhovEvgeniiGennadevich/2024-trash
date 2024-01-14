import Link from "next/link";

type characterType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <main>
      <h1>Персонажи</h1>

      <div>{JSON.stringify(characters)}</div>

      {/* display all characters from array  */}

      {characters.map((character: characterType) => (
        <div key={character.name}>
          <h2>
            <Link href={"/character/" + character.id}>
              {" "}
              {character.name}
            </Link>
          </h2>
          <p>id: {character.id}</p>
          <p>{character.description}</p>
          <img
            src={"/img/characters/" + character.image}
            alt={character.name}
            width={200}
            height={200}
          />
        </div>
      ))}

      {/* display each character from array  */}
    </main>
  );
}

async function getCharacters() {
  const result = await fetch(
    "http://localhost:8080/characters",
    { cache: "no-store" }
  );

  const characters = await result.json();

  return characters;
}
