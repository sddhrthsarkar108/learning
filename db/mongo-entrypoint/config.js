db.getSiblingDB('exos-reveal').createUser({
  "user": "exos-reveal",
  "pwd": "exos-reveal",
  "roles": [
    {
      "role": "readWrite",
      "db": "exos-reveal"
    }
  ]
});
