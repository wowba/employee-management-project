import Component from "../../core/Component"

export default class SearchInput extends Component {
  constructor() {
    super({
      tagName: "input"
    })
  }
  render() {
    this.el.placeholder = "검색창"
  }
}