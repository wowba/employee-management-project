import Component from "../../core/Component";

export default class CreateButton extends Component {
  constructor() {
    super({
      tagName: "button"
    })
  }
  render() {
    this.el.innerText = "임직원 생성"
  }
}