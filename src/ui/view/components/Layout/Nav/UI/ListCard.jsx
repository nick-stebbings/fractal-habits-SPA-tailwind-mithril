import HabitStore from "../../../../../store/habit-store.js";

import GeneralButton from "./Buttons/GeneralButton.jsx";

const ListCard = {
  oncreate: () => {
    let chosenOne = document.querySelector(
      `button[data-id='${HabitStore.current().id}']`
    );
    if (chosenOne) {
      chosenOne.parentNode.classList.add("selected");
    }
  },
  view: ({ attrs: { value } }) => (
    <div class="flex mb-4 items-center justify-between">
      {document.querySelector("#habit-list").addEventListener("click", (e) => {
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
            HabitStore.filterById(+e.target.getAttribute("data-id"))[0]
          );
          m.redraw();
        }
      })}
      <div class="habit-list-details">
        <h2 class="habit-list-details-name">{value.name}</h2>
        <p class="w-full text-grey-darkest">{value.description}</p>
      </div>
      <GeneralButton
        id={"habit-list-select-habit-" + value.id}
        color={"balance-buttonbg-digblue"}
        dataAttr={value.id}
        label="Choose"
        disabled={m.route.param("demo") ? "true" : "false"}
        class={m.route.param("demo") ? "inactive" : "active"}
      />
    </div>
  ),
};

export default ListCard;
