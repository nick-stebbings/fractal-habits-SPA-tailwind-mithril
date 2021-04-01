const ListCard = {
  view: ({ attrs: { value } }) => (
    <div class="flex mb-4 items-center justify-between">
      <div class="habit-list-details">
        <h2 class="habit-list-details-name">{value.name}</h2>
      <p class="w-full text-grey-darkest">{value.description}</p>
      </div>
      <div className="button-group">
        <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
          Select Parent
        </button>
      </div>
    </div>
  ),
};

export default ListCard;

// m('div.list-card-container', [
//   m('div.list-card', [
//     m('div.label-col', [m('span.name-label'), m('span.stats-label')]),
//     m('div.details-col', [
//       m('h2.h-8.font-bold.text-xl.text-bold', value.name),
//       m('div.stats-row', value.description),
//     ]),
//   ]),
// ]),