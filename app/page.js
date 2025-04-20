// import { useUser } from '@auth0/nextjs-auth0/client';
import { auth0 } from "@/lib/auth0";


let users = [
  {
    "ID": "1234567890",
    "name": "Martha",
    "age": 77,
    "description": "A mother and retired gradeschool teacher.\nLooking to take on children as young as 2 all the way to age 12"
  },
  {
    "ID": "0987654321",
    "name": "Fred",
    "age": 30,
    "description": "A father and inbetween jobs."
  }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Users List</h1>
        <ul className="list-disc pl-5">
          {users.map((user, index) => (
            <li key={index} className="mb-4">
              <p><strong>ID:</strong> {user.ID}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Description:</strong> {user.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

