// src/ui/view/components/InputGroup.jsx

const InputGroup = {
  view: ({ attrs, children }) => (
    <div class="flex flex-col mt-6">
      <label for={attrs.name}>{attrs.label}</label>
      {children}
    </div>
  ),
};

export default InputGroup;
