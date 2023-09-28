<template>
  <div class="card">
    <img :src="travel.train_img" alt="ae" class="train-img" />
    <div class="train-name">{{ travel.train_name }}</div>
    <div class="card-header">
      <div>{{ travel.city_departure }}</div>
      ->
      <div>{{ travel.city_arrival }}</div>
    </div>
    <div class="travel_body">
      <div>Время отправления: {{ travel.time_departure }}</div>
      <div>Время прибытия: {{ travel.time_arrival }}</div>
      <div>Время в пути: {{ travel.travel_time }}</div>
      <div>Количество доступных билетов: {{ travel.ticket_count }}</div>
      <div></div>
      <div>Тип вагонов: {{ travel.train_wagon_types }}</div>
    </div>
    <button class="btn">{{ travel.ticket_cost }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  travel: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  border: 1px solid var(--purple-primary);
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  background: var(--gray-primary);
  width: 30%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

.travel_body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10%;
}

.btn {
  background: var(--purple-primary);
  border-radius: 15px;
  color: var(--white-primary);
  border: none;
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
}

.btn:hover {
  background: var(--white-primary);
  outline: 2px solid var(--purple-primary);
  color: var(--purple-primary);
}

.train-name {
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.touch {
  width: 5px;
  height: 5px;
  background: red;
  border-radius: 50px;
}

.train-img {
  width: 80%;
  height: 60%;
  object-fit: cover;
  margin: 0 auto;
  border: 1px solid var(--yellow-primary);
  border-radius: 10px;
}

@media (max-width: 1300px) {
  .card {
    width: 100%;
    height: 40%;
  }
}
</style>
