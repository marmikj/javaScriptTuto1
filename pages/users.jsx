import User from "@/components/user";

function UserLists({ users }) {
  return (
    <>
      <h1>Users Lists</h1><br /> <br/>
      {users.map((user) => {
        return (
          <div key={user.id}>
           <User user={user}/>
          </div>
        );
      })}   
    </>
  );
}

export default UserLists;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
