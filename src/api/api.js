import { Amplify, Storage, API, graphqlOperation } from "aws-amplify";

import awsconfig from "../aws-exports.js";
import { createUser } from "../graphql/mutations.js";
import { listUsers } from "../graphql/queries.js";

Amplify.configure(awsconfig);

export { uploadImg, createEmployee, getEmployees }

const uploadImg = async () => {
  const img = document.getElementById("img").files[0]
  const time = new Date().getTime()
  try {
    const result = await Storage.put(time + img.name, img)
    const url = await Storage.get(result.key)
    return url
  } catch (error) {
    console.log("error", error)
  }
}

const createEmployee = async (data) => {
  const {name, email, team, job, position, img} = data
  const info = {
    name: name,
    email: email,
    team: team,
    job: job,
    position: position,
    img: img,
  }
  return await API.graphql(graphqlOperation(createUser, { input: info }))
}

const getEmployees = async () => {
  return await API.graphql(graphqlOperation(listUsers))
}