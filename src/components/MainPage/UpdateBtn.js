import Component from "../../core/Component"

export default class UpdateBtn extends Component {
  constructor(props) {
    super({
      tagName: "button",
      props: props
    })
  }
  render() {
    this.el.innerText = "수정"
    this.el.addEventListener("click", () => {
      location.href = `#/update?id=${this.props}`
    })
  }
} 