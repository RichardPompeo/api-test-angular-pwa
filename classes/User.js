const users = [];

class User {
  listAll(req, res) {
    res.json(users);
  }

  add(req, res) {
    const user = req.body;

    users.push(user);

    res.send(user);
  }
}

module.exports = new User();
