import DomainStore from "../../store/domain-store.js";

import CreateForm from "../components/Layout/Forms/CreateForm.jsx";
import MainSubSection from "../components/Layout/MainSubSection.jsx";
import HabitFilterList from "../components/Layout/HabitFilterList.jsx";

const AppendHabit = {
  view: () =>
    m("main#append-habit", [
      m(
        MainSubSection,
        { heading: "1: Choose a habit to be the parent" },
        m(HabitFilterList)
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

export default AppendHabit;
