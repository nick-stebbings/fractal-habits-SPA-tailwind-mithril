import HabitStore from "../../../store/habit-store.js";

import ResetButton from "./Nav/ResetButton.jsx";
const ListCard = {
  view: ({ attrs: { value, idx } }) => (
    <div class="flex mb-4 items-center justify-between">
      {document.querySelector("#habit-list").addEventListener(
        "click",
        (e) => {
          if (e.target.tagName === "BUTTON") {
            e.stopPropagation();
            if (!e.target.classList.contains("selected")) {
              let lastSelected = document.querySelector(".selected");
              lastSelected && lastSelected.classList.toggle("selected");
            }
            e.target.classList.add("selected");
          }
          if (e.target.classList.contains("selected")) {
            HabitStore.current(
              HabitStore.filterById(+e.target.getAttribute("name"))[0]
            );
            m.redraw();
          }
        },
        false
      )}
      <div class="habit-list-details">
        <h2 class="habit-list-details-name">{value.name}</h2>
        <p class="w-full text-grey-darkest">{value.description}</p>
      </div>
      <div className="button-group">
        <ResetButton
          id={"habit-list-select-habit-" + value.id}
          name={value.id}
          label="Choose"
          // disabled={m.route.param("demo") ? "true" : "false"}
          class={m.route.param("demo") ? "inactive" : "active"}
        />
      </div>
    </div>
  ),
};

export default ListCard;
