<template>
  <v-row>
      <v-col
        md="8"
        offset-md="2"
      >
            <div class="d-flex">
                <v-text-field class="pt-5 mr-2" placeholder="Buscar" outlined clearable></v-text-field>
                <v-btn class="mt-5" dark x-large color="primary" outlined> SEARCH </v-btn>
            </div>

            <v-divider/>


            <div style="background-color: #f0f0f0" class="pl-2 pr-2 pt-2">

          <v-card
            outlined
            class="mt-2"

            v-for="(item, i) in items"
          :key="i"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.publishedAt"></v-card-subtitle>
                <v-card-text>
                  {{ item.description }}
                </v-card-text>

                <v-card-actions>

                  <v-btn
                    color="primary"
                    outlined
                    rounded
                    small
                  >
                    Mostrar detalle del canal
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="145"
                tile
              >
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </div>
          </v-card>

        </div> 

      </v-col>
</v-row>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({
  name: "HomeView",
})
export default class HomeView extends Vue {

  items:any = [
  {
    id: 'thJJ3uapEsc',
		kind: 'video',
		title: 'HUMORISTAS BOLIVIANOS - RAUL MAMANI - CHISTES VARIOS',
		publishedAt: '2020-10-29T00:47:37Z',
		description: 'Este canal NO monetiza.',
		image: 'https://i.ytimg.com/vi/UZaQSwQv6Qc/mqdefault.jpg',
		channelId: 'UCuvB44rCSUxXEeDMTcXSnAA'
	},
	{
		id: 'sGJg4fAPj3M',
		kind: 'video',
		title: 'Lléname / Saúl M.G. (Videolyric)',
		publishedAt: '2020-10-19T15:20:53Z',
		description: 'Suscribete a nuestra canal, apoyenos para poder seguir creciendo, muchas bendiciones. nuestra red social: ...',
		image: 'https://i.ytimg.com/vi/C4ZdspAcUok/mqdefault.jpg',
		channelId: 'UC-V8KQlL0NTqOnod66oASig'
	},
	{
		id: 'kbjpkatVxMQ',
		kind: 'video',
		title: 'Creo en tí / Saúl M.G. (Videolyric)',
		publishedAt: '2021-04-08T00:06:53Z',
		description: 'Desarrollo backend de un curso en Laravel 8 (realizado en la Facultad Nacional de Ingeniería de la UTO) donde desarrollamos ...',
		image: 'https://i.ytimg.com/vi/lswlgWpI8yg/mqdefault.jpg',
		channelId: 'UC-V8KQlL0NTqOnod66oASig'
	}
  ];
}
</script>
