module.exports.get = (req, res) => {
  const data = [
    {
      name: "Radom",
      temp: 22,
      description: "Pochmurnie",
      icon: 1
    },
    {
      name: "Kraków",
      temp: 19,
      description: "Deszczowo",
      icon: 2
    },
    {
      name: "Zamość",
      temp: 26,
      description: "Słonecznie",
      icon: 3
    },
  ]
  res.send(data);
}