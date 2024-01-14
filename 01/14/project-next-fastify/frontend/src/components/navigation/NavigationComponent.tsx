import Link from "next/link";

export default function NavigationComponent() {
  return (
    <div>
      <Link href='/'>Главная</Link>
      <Link href='/characters'>Персонажи</Link>
    </div>
  );
}
