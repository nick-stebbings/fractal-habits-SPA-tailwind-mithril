import DomainStore from "../../../store/domain-store.js";

import CreateForm from "./Forms/CreateForm.jsx";
import MainSubSection from "../Layout/MainSubSection.jsx";
import HabitList from "./HabitList.jsx";

const CreateHabit = {
  view: () =>
    m("main#append-habit", [
      m(
        MainSubSection,
        { heading: "1: Choose a habit to be the parent" },
        m(HabitList)
      ),
      m(
        MainSubSection,
        { heading: "2: Fill in habit details" },
        m(CreateForm, {
          addHeader: false,
          resourceName: "new-habit-child",
          domain: DomainStore.current,
        })
      ),
    ]),
};

export default CreateHabit;
