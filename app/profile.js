import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();