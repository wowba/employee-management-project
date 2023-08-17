import Component from "../../core/Component"

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header"
    })
  }
  render() {
    this.el.innerHTML = /* html */`
      <a href="#/">
        <h1>EMS</h1>
      </a>
    `
  }
}