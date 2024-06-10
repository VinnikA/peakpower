async function getCurrent(req, res) {
  const { username, token } = req.user;

  res.json({ username, token });
}

module.exports = getCurrent;
