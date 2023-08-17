import Component from "../../core/Component"
import CreateButton from "./CreateButton"
import DeleteButton from "./DeleteButton"

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header"
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <h1>EMS</h1>
    `
    const buttonDiv = document.createElement("div")
    buttonDiv.append(new CreateButton().el, new DeleteButton().el)
    this.el.append(buttonDiv)
  }
}