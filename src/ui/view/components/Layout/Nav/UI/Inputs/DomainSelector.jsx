import DomainStore from "../../../../../../store/domain-store";

import DomainOption from "./DomainOption.jsx";

const DomainSelector = {
  view: () =>
    m(
      "select.form-select#domain-selector",
      {
        class:
          "w-full text-center lg:w-48 text-tershades-gray py-1 lg:pt-2 pl-0 pr-6 -mr-4 rounded-2xl",
      },
      DomainStore.list().map((domain, idx) =>
        m(DomainOption, { value: domain.name, selected: !idx }, domain.name)
      )
    ),
};

export default DomainSelector;
