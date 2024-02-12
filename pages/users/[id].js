// Fetch profile and generate static paths
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
    return { paths, fallback: 'blocking' };
  }
  
  // Fetch specific user profile
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return { props: { user } };
  }
  
  // Display user profile by choosing elements to display
  export default function Profile({ user }) {
    return (
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>City: {user.address.city}</p>
      </div>
    );
  }
  