// src/view/components/Layout/Nav/UI/Buttons/ExpandTextButton.jsx

const ExpandTextButton = {
  view: ({attrs: {parentVnode, buttonTextOff, buttonTextOn}}) => (
    <button
      type="button"
      onclick={function () {
        let hidden;
        let contentContainer = parentVnode.dom.querySelector(".feature-card-content");
        let button = parentVnode.dom.querySelector("button");
        let hiddenParagraphs = parentVnode.dom.querySelectorAll(
          "p.long-content"
        );

        hiddenParagraphs.forEach((paragraph) => {
          const cl = paragraph.classList;
          hidden = cl.contains('hidden')
          hidden ? cl.remove("hidden") : cl.add('hidden');
        });
        button.textContent = hidden ? buttonTextOn : buttonTextOff;
        
        let height = contentContainer.scrollHeight;
          let maxHeight = window.getComputedStyle(contentContainer).maxHeight;
          console.log(contentContainer);
          contentContainer.style.maxHeight =
            (maxHeight === "256px" ? `${height + 16}px` : "256px");
      }}
      class="button font-std hover:bg-balance-basic-digblue rounded-l-2xl rounded-b-2xl bottom-6 absolute px-4 font-semibold py-1 tracking-widest uppercase"
    >
      {buttonTextOff}
    </button>
  ),
};

export default ExpandTextButton;