export default function Sample({ name, age }: { name: string; age: number }) {
  console.log(name, age);

  return <div>Sample Component: {name} {age}</div>;
}
