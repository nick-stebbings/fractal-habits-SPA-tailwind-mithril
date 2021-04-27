const InputGroup = {
  view: ({ attrs, children }) => (
    <div class="flex flex-col mt-6">
      <label class={attrs.class} for={attrs.name}>{attrs.label}</label>
      {children}
    </div>
  ),
};

export default InputGroup;
