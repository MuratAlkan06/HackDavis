// import { useUser } from '@auth0/nextjs-auth0/client';
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  // Fetch the user session
  const session = await auth0.getSession();

  // If no session, show sign-up and login buttons
  if (!session) {
    return (
      <main>
        <a href="/auth/login?screen_hint=signup">
          <button>Sign up</button>
        </a>
        <a href="/auth/login">
          <button>Log in</button>
        </a>
      </main>
    );
  }

  // If session exists, show a welcome message and logout button
  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
      <img src={session.user.picture}></img>
      {/* <h1>Welcome, {session.user.picture}!</h1> */}
      <p>
        <a href="/auth/logout">
          <button>Log out</button>
        </a>
      </p>
    </main>
  );
}

// export default function Home() {
//   const { user } = useUser();

//   return (
//     <main>
//       <h1>Welcome to Babysitter Connect</h1>

//       {!user ? (
//         <a href="/api/auth/login">Login</a>
//       ) : (
//         <>
//           <p>Hello, {user.name}!</p>
//           <a href="/profile">Go to Profile</a><br />
//           <a href="/api/auth/logout">Logout</a>
//         </>
//       )}
//     </main>
//   );
// }