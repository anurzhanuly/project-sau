<template>
    <div>
        <WelcomeSection/>
        <InfoSection/>
        <FooterBase/>
    </div>
</template>

<script>
import WelcomeSection from '@/components/homePage/WelcomeSection.vue';
import InfoSection from '@/components/homePage/InfoSection.vue';
import FooterBase from '@/components/FooterBase.vue';

export default {
  name: 'HomeView',
  components: {
    WelcomeSection,
    InfoSection,
    FooterBase,
  },
};
</script>
