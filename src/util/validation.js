export default function validation(data) {
  // const name = document.getElementById("name")
  // const email = document.getElementById("email")
  // const team = document.getElementById("team")
  // const job = document.getElementById("job")
  // const position = document.getElementById("position")
  // const img = document.getElementById("img")
  const {name, email, team, job, position, img} = data

  if (
    name === "" || email === "" || team === "" || 
    job === "" || position === "" || img === ""
  ) {
    return false
  } else {
    return true
  }
}