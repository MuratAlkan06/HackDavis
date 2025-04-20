'use client';

const users = [ 
    {
        ID: "1234567890",
        name: "Martha",
        age: 77,
        description:
          "A mother and retired grade school teacher.\nLooking to take on children as young as 2 all the way to age 12.",
      },
      {
        ID: "0987654321",
        name: "Fred",
        age: 30,
        description:
          "A father and in between jobs, can take\ncare of children from 5 to age 10.",
      },
      {
        ID: "1234567892",
        name: "Frank",
        age: 45,
        description:
          "Recent immigrant, struggling for employment.\nHad childcare experience for 10 years.",
      },
      {
        ID: "1234567893",
        name: "Tim",
        age: 35,
        description: "Looking to take care of children of any age.",
      },
      {
        ID: "1234667890",
        name: "Mary",
        age: 24,
        description:
          "Looking for childcare for 2 kids ages 3 & 7.\nCalm kids for the most part.",
      },
      {
        ID: "1234867890",
        name: "Susan",
        age: 31,
        description: "Looking for care for my young child age 3.",
      },
      {
        ID: "1234597890",
        name: "Fred",
        age: 26,
        description: "Looking for care for my son while at work.",
      },
      {
        ID: "1230567890",
        name: "Sallin",
        age: 25,
        description: "Father looking for child care for my 8-year-old.",
      },
];

export default function UsersPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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