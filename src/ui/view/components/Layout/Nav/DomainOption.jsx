const DomainOption = {
  view: ({attrs}) => (
    <option class="text-center" value={attrs.value}>
      {attrs.value}
    </option>
  ),
};

export default DomainOption;
