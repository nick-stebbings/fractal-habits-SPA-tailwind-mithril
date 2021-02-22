import watermark from "../../images/watermark.png";
import * as infinity from "../../images/icons/infinity.svg";

export default function () {
  return {
    view: (vnode) => (
      <footer>
        <img class="bg-opacity-30 bg-gradient-to-r from-blue-100 to-blue-300 h-12 w-4" src={ infinity } alt=""/>
      </footer>
    ),
  };
}