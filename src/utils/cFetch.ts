const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export default async function cFetch(url: string) {
  console.log(`${SERVER_URL}${url}`);
  try {
    const data = await fetch(`${SERVER_URL}${url}`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    });

    return data.json();
  } catch (error) {
    console.log({ error });
  }
}
