import watermark from "../../images/watermark.png";
import * as infinity from "../../images/icons/infinity.svg";

export default function () {
  return {
    view: (vnode) => (
      <footer class="flex-none w-full bg-opacity-30 bg-gradient-to-r from-blue-100 to-blue-300 h-12">
        <img class="w-4" src={ infinity } alt=""/>
      </footer>
    ),
  };
}