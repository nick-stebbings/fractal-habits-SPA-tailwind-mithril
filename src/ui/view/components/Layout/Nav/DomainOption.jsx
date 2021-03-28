const DomainOption = {
  view: ({attrs}) => (
    <option value={attrs.value}>
      {attrs.value}
    </option>
  ),
};

export default DomainOption;
