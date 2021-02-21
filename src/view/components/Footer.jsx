import watermark from "../../images/watermark.png";

export default function () {
  return {
    view: (vnode) => (
      <footer style={{ backgroundImage: `url(${watermark})`}}>
        Here is some content
      </footer>
    ),
  };
}