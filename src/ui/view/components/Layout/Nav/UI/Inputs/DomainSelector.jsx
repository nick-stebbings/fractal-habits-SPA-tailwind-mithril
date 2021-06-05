import DomainStore from '../../../../../../store/domain-store';

import DomainOption from './DomainOption.jsx';
const DomainSelector = {
  view: () =>
    m(
      "select.form-select.domain-selector",
      {
        class: "w-full py-1 lg:pt-2 pl-0 pr-6 mr-1 rounded-2xl",
        selectedIndex: DomainStore.list().indexOf(DomainStore.current()),
        tabindex: 2,
      },
      DomainStore.list().map((domain, idx) =>
        m(
          DomainOption,
          {
            value: domain.name,
            selected: DomainStore.current()?.name === domain.name,
          },
          domain.name
        )
      )
    ),
};

export default DomainSelector;
