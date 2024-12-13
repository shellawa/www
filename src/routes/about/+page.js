export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/dev/contents/profile/profile_links.json"
  )
  const profile_links = await res.json()
  return { profile_links }
}