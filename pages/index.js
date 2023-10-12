import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>next pre-rendering</h1>
      <Link href="/users">Users </Link><br />
      <Link href="/posts">Posts </Link>
    </div>
  );
}
