import Component from "../../core/Component";
import CreateBtn from "./CreateBtn"
import DeleteBtn from "./DeleteBtn"
import SearchInput from "./SearchInput";

export default class Menu extends Component {
  constructor() {
    super({
      tagName: "div"
    }) 
  }
  render() {
    const searchInput = new SearchInput()
    const buttonDiv = document.createElement("div")
    const createBtn = new CreateBtn()
    const deleteBtn = new DeleteBtn()
    buttonDiv.append(createBtn.el, deleteBtn.el)
    this.el.append(searchInput.el, buttonDiv)
  }
}