import Link from "next/link";

type characterType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default async function CharacterPage(params: any) {
  const characterId = params.params.slug;

  const character = await getCharacterById(characterId);

  return (
    <main>
      <h1>Персонаж</h1>

      <div key={character.name} className=''>
        <h2>
          <Link href={"/character/" + character.id}>
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
    </main>
  );
}

async function getCharacterById(id: string) {
  const result = await fetch(
    "http://localhost:8080/characters",
    { cache: "no-store" }
  );

  const characters = await result.json();

  const character = characters.find(
    (character: any) => character.id === id
  );

  return character;
}
