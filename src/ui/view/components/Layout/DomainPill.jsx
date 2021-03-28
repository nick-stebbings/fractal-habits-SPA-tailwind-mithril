import DomainStore from '../../../store/domain-store';
import { openModal } from '../../../assets/scripts/animations';
function log(res) {
  console.log(res, "LOGGER");
  return res;
}
const DomainPill = {
  oncreate: (vnode) => {
    vnode.dom.addEventListener('click', (event) => {
      DomainStore.submit({
        name: vnode.attrs.name,
        description: vnode.attrs.name,
        rank: vnode.attrs.rank + 2,
        hashtag: `#${vnode.attrs.name.toLowerCase().split(" ").join("-")}`,
      })
      .then(log)
      .then(() => {
        m.redraw();
      })
      .then(() => {
        const domainInput = document.getElementById('domain-selector');
        
        console.log(DomainStore.list());
      })
      .then(openModal)
      .catch((err) => {
        err.status
          ? window.FlashMessage.error(err.status)
          : window.FlashMessage.error("Unable to add Domain");
      });
    });
  },
  view: ({ attrs }) => (
    <button className="domain-create">
      <div className="flex items-center justify-between p-4 my-4 bg-gray-700 rounded-full shadow-md">
        {attrs.name}
      </div>
    </button>
  ),
};

export default DomainPill;
