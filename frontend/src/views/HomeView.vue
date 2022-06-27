<template>
    <div>
        <WelcomeSection/>
        <InfoSection/>
    </div>
</template>

<script>
import WelcomeSection from '@/components/homePage/WelcomeSection.vue';
import InfoSection from '@/components/homePage/InfoSection.vue';
import DataService from '../services/DataServices';

export default {
  name: 'HomeView',
  components: {
    WelcomeSection,
    InfoSection,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getQuestions() {
      DataService.getAll()
        .then((response) => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getQuestions();
  },
};
</script>
