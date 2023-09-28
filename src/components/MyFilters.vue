<template>
  <div class="filters">
    <img src="/train100.png" alt="train" />
    <div class="sections">
      <select>
        <option selected disabled>По городам</option>
        <option>По возрастанию</option>
        <option>По убыванию</option>
      </select>
      <select>
        <option selected disabled>По времени</option>
        <option>По возрастанию</option>
        <option>По убыванию</option>
      </select>
      <select>
        <option selected disabled>По стоимости</option>
        <option>По возрастанию</option>
        <option>По убыванию</option>
      </select>
    </div>
    <div class="filters-footer">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
      distinctio veniam consectetur assumenda fugit nobis, facere voluptas
      consequuntur excepturi maiores?
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filters {
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

select {
  border: 1px solid var(--white-primary);
  background: var(--purple-primary);
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 5px;
  width: 80%;
  height: 2.8rem;
  margin: 0 auto;
  margin-bottom: 10px;
}
option {
  border-radius: 10px;
}

.sections {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.filters-footer {
  padding: 2rem;
  border-top: 1px solid var(--purple-primary);
}
</style>
