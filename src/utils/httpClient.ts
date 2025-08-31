export function getData<Item>(): Promise<Item> {
  return fetch("http://localhost:5173/api/data.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
