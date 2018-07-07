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
                <form novalidate>
                    <b-field label>Country of Primary Residence
                        <b-select placeholder="Country" icon="earth" size="default" expanded=true>
                            <option
                                v-for="option in data"
                                :value="option.id"
                                :key="option.id">
                                {{ option.user.first_name }}
                            </option>
                        </b-select>
                    </b-field>

                    <!-- <selected-country /> -->
                    <div class="space"></div>
                    <div class="control">
                        <button class="button is-primary">Submit</button>
                    </div>
                </form>
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
.button {
  background-color: #00477c;
}
.button.is-primary.is-active, .button.is-primary:active {
    background-color: #00477c;
    border-color: transparent;
    color: #fff;
}
</style>
