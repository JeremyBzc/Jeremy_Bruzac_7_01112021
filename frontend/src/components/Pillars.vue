<template>
  <b-container fluid class="card-body border-success p-4">
    <b-row>
      <b-col>
        <b-img
          thumbnail
          fluid
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFBswgg7G6ZNYAN0X_ZUe8a3ct3FyO-tvRw&usqp=CAU"
          alt="Créativité"
          width="200"
        ></b-img>
        <h3>CRÉATIVITÉ</h3>
      </b-col>
      <b-col>
        <b-img
          thumbnail
          fluid
          src="https://www.cartefinancement.com/wp-content/uploads/2021/01/fonds-de-solidarite-1024x684.jpg"
          alt="Solidarité"
          width="200"
        ></b-img>
        <h3>SOLIDARITÉ</h3>
      </b-col>
      <b-col>
        <b-img
          thumbnail
          fluid
          src="https://www.digitalrecruiters.com/medias/2019/11/bien-etre-au-travail-bienfaits-et-impacts-sur-la-motivation-et-la-productivite-des-salaries-1-480x270.jpg"
          alt="Image 3"
          width="200"
        ></b-img>
        <h3>BIEN-ÊTRE</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Pillars',
  props: {
    msg: String,
  },
}
</script>
