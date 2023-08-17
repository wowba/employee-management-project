import CancelBtn from "../components/CreatePage/CancleBtn"
import SubmitBtn from "../components/CreatePage/SubmitBtn"
import Component from "../core/Component"

export default class CreatePage extends Component {
  render() {
    this.el.innerHTML = /* html */`
      <div>
        <div>이름<input id="name"/></div>
        <div>이메일<input id="email"/></div>
      </div>
      <div>
        <div>부서<input id="team"/></div>
        <div>직급<input id="job"/></div>
      </div>
      <div>
        <div>직책<input id="position"/></div>
        <div>이미지<input id="img" type="file" accept="image/*"/></div>
      </div>
    `

    const buttonDiv = document.createElement("div")
    const submitBtn = new SubmitBtn()
    const cancelBtn = new CancelBtn()
    buttonDiv.append(submitBtn.el, cancelBtn.el)
    this.el.append(buttonDiv)
  }
}