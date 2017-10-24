import fetch from 'isomorphic-unfetch';

export async function getProfile(name) {
  const res = await fetch(`https://api.github.com/users/${name}?access_token=f6625d60471f261277d89d3fb4455bf567bd2cd3`);
  return await res.json();
}

export async function getGists(name) {
  console.log(`https://api.github.com/users/${name}/gists`);
  const res = await fetch(`https://api.github.com/users/${name}/gists?access_token=f6625d60471f261277d89d3fb4455bf567bd2cd3`);
  return await res.json();
}

export async function getGist(id) {
  console.log(`https://api.github.com/gists/${id}`);
  const res = await fetch(`https://api.github.com/gists/${id}?access_token=f6625d60471f261277d89d3fb4455bf567bd2cd3`);
  return await res.json();
}
