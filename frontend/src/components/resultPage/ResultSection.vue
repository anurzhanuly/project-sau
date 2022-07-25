<template>
  <section class="section-result">
    <h2 class="result-header">Результаты:</h2>
    <div id="pdf">
      <img
        :src="logoJpg"
        alt="logo"
        height="30"
        width="160"
        style="margin-bottom: 40px"
        class="hidden"
      />
      <div
        v-for="(resultItem, index) in result.recommendations"
        :key="index"
        class="result-item"
        style="margin-bottom: 30px"
      >
        <h3
          style="
            margin-bottom: 15px;
            text-decoration: underline;
            font-size: 20px;
          "
        >
          {{ resultItem.name }}
        </h3>
        <strong style="margin-bottom: 7px">
          Вам показаны следующие исследования:
        </strong>
        <ul style="margin: 0 0 10px 30px">
          <li v-for="(item, index) in resultItem.tests" :key="index">
            {{ item }}
          </li>
        </ul>
        <strong style="margin-bottom: 7px"> Почему это важно:</strong>
        <p style="margin-bottom: 10px">{{ resultItem.importance }}</p>
        <strong style="margin-bottom: 7px">Так же рекомендуется:</strong>
        <ul style="margin: 0 0 10px 30px">
          <li v-for="(item, index) in resultItem.recommendations" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <button @click="printDocument()" class="btn">Открыть в pdf</button>
  </section>
</template>

<script setup>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import logoJpg from "../../assets/base64/logo.js";

const result = {
  recommendations: [
    {
      name: "Рак молочных желез",
      tests: ["Маммография (каждые 2 года)", "УЗИ молочных желез"],
      recommendations: [
        "Самообследование молочной железы, Визуальный осмотр кожи и соска каждый месяц с 40 лет",
        "Обследование молочной железы, Визуальный осмотр кожи и соска врачом терапевтом/ маммологом раз в два года с 40 лет",
      ],
      importance:
        "Рак молочных желез - самый распространенный вид рака среди женщин. 1 из 8 женщин развеет это заболевание. Ранняя диагностика увеличивает выживаемость до 92%.",
    },
    {
      name: "Простуда",
      tests: ["Маммография (каждые 2 года)", "УЗИ молочных желез"],
      recommendations: [
        "Самообследование молочной железы, Визуальный осмотр кожи и соска каждый месяц с 40 лет",
        "Обследование молочной железы, Визуальный осмотр кожи и соска врачом терапевтом/ маммологом раз в два года с 40 лет",
      ],
      importance:
        "Рак молочных желез - самый распространенный вид рака среди женщин. 1 из 8 женщин развеет это заболевание. Ранняя диагностика увеличивает выживаемость до 92%.",
    },
  ],
  status: 200,
};

const printDocument = () => {
  //get table html
  const pdfTable = document.getElementById("pdf");
  //html to pdf format
  const html = htmlToPdfmake(pdfTable.innerHTML, {
    imagesByReference: true,
  });

  const documentDefinition = {
    content: html.content,
    images: html.images,
  };
  pdfMake.vfs = pdfFonts;
  pdfMake.createPdf(documentDefinition).open();
};
</script>

<style scoped>
.section-result {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 60px 80px 80px;
  margin: 40px auto;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.result-header {
  margin-bottom: 40px;
}

.result-item {
  display: flex;
  flex-direction: column;
}

.hidden {
  display: none;
}

.btn {
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}

.btn:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow 0.2s;
}

.btn:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

.btn:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}

@media (max-width: 480px) {
  .btn {
    font-size: 14px;
    line-height: 18px;
    margin: 5px 0;
  }

  .section-result {
    padding: 50px 30px;
  }
}

@media (max-width: 768px) {
  .test-title {
    font-size: 22px;
  }

  .result-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
