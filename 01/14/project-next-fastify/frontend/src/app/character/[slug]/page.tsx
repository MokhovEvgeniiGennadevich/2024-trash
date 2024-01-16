import { Metadata } from "next";
import Link from "next/link";

type paramsType = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async (
  params: paramsType
): Promise<Metadata> => {
  // Получить данные с бэкэнда ????????
  const character = await getCharacterById(
    params.params.slug
  );

  return {
    title: character.name,
    description: "Описание персонажа " + character.name,
  };
};

type characterType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default async function CharacterPage(
  params: paramsType
) {
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

// Singleton Pattern ?
type pageDataType = {
  character: characterType;
};

let pageData: pageDataType;

// TODO: теперь он глобально кэширует результат этой функции и выдаёт одну страницу на любой URL
async function getCharacterById(id: string) {
  // Singleton Pattern
  if (pageData?.character) {
    console.log("Cached");
    return pageData.character;
  }

  const result = await fetch(
    "http://localhost:8080/characters",
    { cache: "no-store" }
  );

  console.log("Fetch");

  const characters = await result.json();

  const character = characters.find(
    (character: any) => character.id === id
  );

  // Singleton Page Params
  pageData = {
    character: character,
  };

  return character;
}
