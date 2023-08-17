import Menu from "../components/Menu/Menu"
import Component from "../core/Component"

export default class MainPage extends Component {
  render() {
    const menu = new Menu()
    this.el.append(menu.el)
  }
}