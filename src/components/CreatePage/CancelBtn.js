import Component from "../../core/Component";

export default class CancelBtn extends Component{
  constructor() {
    super({
      tagName: "button"
    })
  }
  render() {
    this.el.innerText = "취소"
    this.el.addEventListener("click", () => {
      location.href = '#/'
    })
  }
}