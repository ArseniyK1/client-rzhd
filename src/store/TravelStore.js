import { defineStore } from "pinia";

export const useTravelStore = defineStore("travelStore", {
  state: () => ({
    travels: [
      {
        travel_id: 1,
        time_departure: "00:00",
        time_arrival: "05:00",
        travel_time: 5,
        city_departure: "Липецк",
        city_arrival: "Москва",
        ticket_cost: 2000,
        ticket_count: 10,
        train_name: "Стриж",
        train_wagon_types: "купе",
        train_img: "/strizh.jpg",
      },
      {
        travel_id: 2,
        time_departure: "10:00",
        time_arrival: "17:00",
        travel_time: 7,
        city_departure: "Саратов",
        city_arrival: "Пермь",
        ticket_cost: 1200,
        ticket_count: 5,
        train_name: "Рассвет",
        train_wagon_types: "сидячий",
        train_img: "/rassvet.jpg",
      },
      {
        travel_id: 3,
        time_departure: "12:20",
        time_arrival: "15:20",
        travel_time: 3,
        city_departure: "Липецк",
        city_arrival: "Воронеж",
        ticket_cost: 999,
        ticket_count: 1,
        train_name: "Прекрасное далеко",
        train_wagon_types: "плацкарт",
        train_img: "/prekrasnoe.jpg",
      },
      {
        travel_id: 4,
        time_departure: "20:00",
        time_arrival: "00:00",
        travel_time: 4,
        city_departure: "Рязань",
        city_arrival: "Сызрань",
        ticket_cost: 699,
        ticket_count: 50,
        train_name: "Ворчун",
        train_wagon_types: "купе",
        train_img: "/strela.jpg",
      },
      {
        travel_id: 5,
        time_departure: "14:00",
        time_arrival: "22:00",
        travel_time: 8,
        city_departure: "Владивосток",
        city_arrival: "Казань",
        ticket_cost: 5999,
        ticket_count: 16,
        train_name: "Амур",
        train_wagon_types: "плацкарт",
        train_img: "/sapsan.jpg",
      },
    ],
  }),
  getters: {
    filtersTravelsTrainNameUp() {
      const newArr = this.travels.sort((a, b) =>
        a.train_name.localeCompare(b.train_name)
      );
      return newArr;
    },
    filtersTravelsTrainNameDown() {
      const newArr = this.travels.sort((a, b) =>
        b.train_name.localeCompare(a.train_name)
      );
      return newArr;
    },
    filtersTravelsTimeUp() {
      const newArr = this.travels.sort((a, b) => a.travel_time - b.travel_time);
      return newArr;
    },
    filtersTravelsTimeDown() {
      const newArr = this.travels.sort((a, b) => b.travel_time - a.travel_time);
      return newArr;
    },
    filtersTravelsCostUp() {
      const newArr = this.travels.sort((a, b) => a.ticket_cost - b.ticket_cost);
      return newArr;
    },
    filtersTravelsCostDown() {
      const newArr = this.travels.sort((a, b) => b.ticket_cost - a.ticket_cost);
      return newArr;
    },
  },
});
