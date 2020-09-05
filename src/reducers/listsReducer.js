const initialState = [
  {
    title: "Web Development",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a login page",
      },
      {
        id: 1,
        text: "we created a signup page",
      },
    ],
  },
  {
    title: "Mobile-React Native",
    id: 0,
    cards: [
      {
        id: 0,
        text: "tech architecture overview",
      },
      {
        id: 1,
        text: "gradle debug build process",
      },
      {
        id: 2,
        text: "Firebase DEBUG mode logging",
      },
    ],
  },
  {
    title: "Opmagic",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Tasks for new people",
      },
      {
        id: 1,
        text: "Pages to be Deleivered",
      },
      {
        id: 2,
        text: "API to be Done",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default listsReducer;
