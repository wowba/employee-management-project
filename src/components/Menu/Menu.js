import Component from "../../core/Component";
import CreateBtn from "./CreateBtn"

export default class Menu extends Component {
  constructor() {
    super({
      tagName: "div"
    }) 
  }
  render() {
    const buttonDiv = document.createElement("div")
    const createBtn = new CreateBtn()
    buttonDiv.append(createBtn.el)
    this.el.append(buttonDiv)
  }
}