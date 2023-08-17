import Header from "./components/Header/Header"

export default class App {
  constructor() {
    this.el = document.createElement('div')

    const header = new Header()
    this.el.append(header.el)
  }
}