const MUPPETS = ["Kermit", "Miss Piggy", "Fozzie", "Animal", "Scooter", "Skeeter", "Rowlf", "Gonzo", "Bunsen", "Beaker"]

exports.randomMuppet = (req, res) => {
  const muppet = MUPPETS[Math.floor(Math.random()*MUPPETS.length)]
  console.log(`Returned another muppet!! ${muppet}`)
  res.send(`This muppet is named ${muppet}!!!!!!!! this is cool not really`)
}
