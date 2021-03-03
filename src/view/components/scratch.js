// src/view/components/FormContainer .jsx

const FormContainer = {
  view: ({ children }) => (
    <div class="divide-y divide-gray-200">
      <div class="sm:text-lg sm:leading-7 py-8 space-y-4 text-base leading-6 text-gray-700">
        {children}
      </div>
    </div>
  ),
};

export default FormContainer;
