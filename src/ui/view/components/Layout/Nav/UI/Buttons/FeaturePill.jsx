// src/view/components/Layout/Nav/UI/Buttons/FeaturePill.jsx
import DomainStore from '../../../../../../store/domain-store';
import { handleErrorType } from '../../../../../../store/client';
import { newRecord } from '../../../../../../assets/scripts/controller';

const FeaturePill = {
  oncreate: (vnode) => {
    vnode.dom.addEventListener('click', () => {
      DomainStore.submit({
        name: vnode.attrs.name,
        description: vnode.attrs.name,
        rank: vnode.attrs.rank + 1,
        hashtag: `#${vnode.attrs.name.toLowerCase().split(' ').join('-')}`,
      })
        .then(() => {
          vnode.attrs.modalType(true);
          newRecord(true);
        })
        .then(() => {
          m.redraw();
        })
        .catch(handleErrorType);
    });
  },
  view: ({ attrs }) => (
    <div
      className="bg-balance-basic-gray nav-pill h-36 text-xxl flex items-center justify-center py-1 mx-4 my-1 rounded-full"
      style={`cursor: pointer; clip-path: url(${attrs.clipPathUrl})`}
    >
      <span>{attrs.title}</span>
    </div>
  ),
};

export default FeaturePill;
