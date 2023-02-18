<template>
  <section class="patient-card-section">
    <div class="patient-card">
      <h3>Имя Фамилия пациента</h3>
      <div class="patient-info">
        <div class="patient-info-inner">
          <label>Пол</label>
          <p>Женский</p>
        </div>
        <div class="patient-info-inner">
          <label>Дата рождения</label>
          <p>22/03/1995</p>
        </div>
        <div class="patient-info-inner">
          <label>Возраст</label>
          <p>28 лет</p>
        </div>
        <div class="patient-info-inner">
          <label>Телефон</label>
          <p>+7 705 777 88 98</p>
        </div>
      </div>
    </div>

    <p-divider layout="vertical" />

    <div class="patient-download-btn">
      <p-button
        label="Скачать результаты"
        class="p-button-raised p-button-text"
      />
    </div>
  </section>
  <section class="survey-result-section">
    <div class="result">
      <h3>🔍 Результаты:</h3>
      <div class="result-panels">
        <div>
          <p-panel header="Жалобы при поступлении:" :toggleable="true">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </p-panel>
        </div>
        <div>
          <p-panel header="Анамнез заболевания:" :toggleable="true">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </p-panel>
        </div>
        <div>
          <p-panel header="Анамнез жизни:" :toggleable="true">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </p-panel>
        </div>
      </div>
    </div>
    <div class="patient-doctor">
      <h3>🩺 Ваш специалист:</h3>
      <div class="result-panels">
        <p-panel header="Мырзакулова Алия">
          <div class="patient-info">
            <div class="patient-info-inner">
              <label>Специализация</label>
              <p>Врач-отоларинтолог</p>
            </div>
            <div class="patient-info-inner">
              <label>Телефон</label>
              <p>+7 705 777 88 98</p>
            </div>
            <div class="patient-info-inner">
              <label>Место работы</label>
              <p>Поликлиника №9</p>
            </div>
            <div class="patient-info-inner">
              <label>Время приёма</label>
              <p>С 09:00 до 12:00</p>
            </div>
          </div>
        </p-panel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PDivider from "primevue/divider";
import PButton from "primevue/button";
import PPanel from "primevue/panel";
</script>

<style scoped>
.patient-card-section {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
}
.patient-card {
  width: 50%;
}
.patient-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.patient-info-inner {
  display: block;
  margin: 16px 22px 0 0;
}
.patient-info-inner label {
  color: var(--surface-600);
  font-weight: bold;
}
.patient-download-btn {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.survey-result-section {
  display: flex;
  gap: 16px;
}
.result {
  width: 70%;
}
.result-panels {
  margin-top: 16px;
}

.result-panels div {
  margin-bottom: 16px;
}
.patient-doctor {
  width: 30%;
}
</style>
