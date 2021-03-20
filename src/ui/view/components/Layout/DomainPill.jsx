import DomainStore from "../../../store/domain-store";
import {openModal} from "../../../assets/scripts/animations";

const DomainPill = {
  oncreate: (vnode) => {
    vnode.dom.addEventListener('click', (event) => {
        DomainStore.submit({
          name: vnode.attrs.name,
          description: vnode.attrs.name,
          rank: vnode.attrs.rank + 2,
          hashtag: `#${vnode.attrs.name}`,
        })
        .then(() => {
          m.redraw();
        })
        .then(openModal)
        .catch((err) => {
          err.status ? window.FlashMessage.error(err.status) : window.FlashMessage.error("Unable to add Domain");
        });
      }
    );
  },
  view: ({ attrs }) => (
      <button class="domain-create">
        <div class="flex justify-between items-center p-4 my-4 bg-gray-700 rounded-full shadow-md">
          {attrs.name}
        </div>
      </button>
  ),
};

export default DomainPill;
