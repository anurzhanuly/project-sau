<template>
  <div class="about">
    <h1>Админка</h1>
    <section class="container">
      <label class="label" for="title">
        Title: <input class="input" id="title" type="text">
      </label>
      <button class="btn">Добавить</button>
    </section>
    <section class="container">
      <label class="label" for="title">
        Descr: <input class="input" id="title" type="text">
      </label>
      <button class="btn">Добавить</button>
    </section>
    <section class="container">
      <label class="label" for="title">
        NextId: <input class="input" id="title" type="text">
      </label>
      <button class="btn">Добавить</button>
    </section>
  </div>
</template>

<style scoped>
  .about {
    margin: 0 auto;
    max-width: 1200px;
  }

  .label {
    margin-right: 30px;
  }

  .input {
    width: 700px;
    height: 200px;
  }

  .container {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    color: #42b983;
    position: relative;
    place-content: center;
    place-items: center;
    width: fit-content;
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 1px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
    outline: none;
    background: #fff;
    transition: all 0.22s;
    margin-left: 60px;
    height: 70px;
  }

  .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .btn:disabled {
    cursor: not-allowed;
    opacity: 1!important;
    background: #eee!important;
    border-color: #ddd!important;
    color: #999!important;
  }

  .btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
</style>
