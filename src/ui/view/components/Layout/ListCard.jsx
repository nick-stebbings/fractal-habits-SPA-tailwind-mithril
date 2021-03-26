const ListCard = {
  view: ({ attrs: { value } }) => m('div.list-card-container', [
    m('div.list-card', [
      m('div.label-col', [m('span.name-label'), m('span.stats-label')]),
      m('div.details-col', [
        m('h2.h-8.font-bold.text-xl.text-bold'),
        m('div.stats-row', value),
      ]),
    ]),
  ]),
};

export default ListCard;
