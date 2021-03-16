// src/ui/view/components/CreateForm.jsx
import NodeStore from "../../../../store/habit-node-store.js";

import FormHeader from "./FormHeader.jsx";
import FormContainer from "./FormContainer.jsx";
import InputGroup from "./FormInputGroup.jsx";

const CreateForm = {
  view: ({ attrs, children }) => (
    <div class="md:max-w-1/2 lg:max-w-1/3 sm:w-2/3 flex flex-col justify-between w-full px-4 sm:px-0 my-8">
      <form>
        <FormHeader
          iconPath={
            "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          }
          title={`Create a ${attrs.resourceName}`}
          description={attrs.resourceDescription}
        ></FormHeader>

        {m(FormContainer, [
          m(
            InputGroup,
            { label: "Habit Title" },
            m("input[type=text]", {
              class: "form-input",
              placeholder: "Hydrate in the A.M.",
            })
          ),
          m(
            InputGroup,
            { label: "Habit Description" },
            m("input[type=text]", {
              class: "form-input",
              placeholder: "Drinking water each day after waking",
            })
          ),
          m(
            InputGroup,
            { label: "Initiation Date" },
            m("input[type=date]", {
              class: "form-input w-1/2",
            })
          ),
        ])}

        {/* Initiation Date */}
        {/* <div class="flex items-center space-x-4">
                <div class="flex flex-col">
                  <label class="leading-loose">Initiation Date</label>
                  <div class="relative text-gray-400 focus-within:text-gray-600">
                    {m("input[type=date]", {
                      class:
                        "pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600",
                    })}
                    <div class="absolute top-2 left-3">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
      </form>
    </div>
  ),
};

export default CreateForm;
/* 
        // {
        //   m(FormContainer, [
        //     m(InputGroup, { label: "Parent" }, [
        //       m("input[type=text]", {
        //         class: "form-input ",
        //         id: "parent",
        //       }),
        //       m("input[type=submit]", {
        //         value: "Submit Root",
        //         onclick: (event) => {
        //           event.preventDefault();
        //           NodeStore.submit(null);
        //         },
        //       }),
        //       m("input[type=submit]", {
        //         value: "Submit",
        //         onclick: (event) => {
        //           event.preventDefault();
        //           NodeStore.submit(
        //             Number(document.querySelector("#parent").value)
        //           );
        //         },
        //       }),
        //       m("input[type=submit]", {
        //         value: "Delete",
        //         onclick: (event) => {
        //           event.preventDefault();
        //           NodeStore.runDelete(
        //             Number(document.querySelector("#parent").value)
        //           );
        //         },
        //       }),
        //     ]),
        //   ]);
        // } */