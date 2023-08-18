import Component from "../../core/Component"
import UpdateBtn from "./UpdateBtn"
import DeleteBtn from "./DeleteBtn"
import { getImgUrl } from "../../api/api"

export default class Employee extends Component {
  constructor(props) {
    super({
      props: props
    })
  }
  async render() {
    const s3ImgUrl = await getImgUrl(this.props.img )
    console.log(s3ImgUrl)

    this.el.innerHTML = /* html */`
      <div>
        <input type="checkbox"/>
      <div>
      <img src="${s3ImgUrl}" />
      <div>
        <span>${this.props.team}<span>
        <div>
          <span>${this.props.name}<span>
          <span>${this.props.position}<span>
        </div>
      </div>
    `
    const updateBtn = new UpdateBtn(this.props.id)
    const deleteBtn = new DeleteBtn(this.props.id)
    this.el.append(updateBtn.el, deleteBtn.el)
  }
}