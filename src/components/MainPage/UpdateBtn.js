import Component from "../../core/Component"

export default class UpdateBtn extends Component {
  constructor() {
    super({
      tagName: "button"
    })
  }
  render() {
    this.el.innerText = "수정"
  }
} 