export default [
  { "username": "alice",   "role": "admin", "_id": "123", "followers": ["234", "345"], "following": ["345"]},
  { "username": "bob",     "role": "user", "_id": "234", "followers": ["123"], "following": ["345"] },
  { "username": "charlie", "role": "curator", "_id": "345", "followers": ["123", "234"], "following": ["123", "234"] }
]