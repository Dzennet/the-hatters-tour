let initState = {
  ticketsData: [
    { date: "13 Мая 19:00", id: 1, city: "Самара", location: "МТЛ Арена" },
    { date: "16 Мая 19:00", id: 2, city: "Саратов", location: "ONYX" },
    { date: "17 Мая 19:00", id: 3, city: "Волгоград", location: "VS Club" },
    { date: "28 Марта 21:00", id: 4, city: "Тель-Авив", location: "А-Театрон" },
    {
      date: "6 Июня 20:00",
      id: 5,
      city: "Санкт-Петербург",
      location: "Юбилейный",
    },
    {
      date: "8 Июня 19:00",
      id: 6,
      city: "Хабаровск",
      location: "Клуб «LOONA»",
    },
    {
      date: "9 Июня 19:00",
      id: 7,
      city: "Владивосток",
      location: "СК «Паллада»",
    },
  ],
};

const TicketsReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default TicketsReducer;
