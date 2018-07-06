<template>
    <section class="section">
        <div class="container is-fullhd template-horizontal">
            <h1 class="title is-spaced">Calix Limited<br>Initial Public Offering</h1>
            <h2 class="subtitle">
                The Initial Public Offering ("Offer") is only being made to persons who have a registered address in Australia
            </h2>
            <div class="box">
                <p>
                   Due to legal restrictions, access to this webpage is only intended for access by persons within Australia. This webpage does not constitute an offer of securities in any place in which, or to any person to whom, it would not be lawful to make such an offer.
                </p>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String,
  },
};
</script>

<style lang='scss' scoped>
.title {
    color: #005695;
}
p {
    color: #777;
}
</style>
