<template>
   <div>
    <div v-if="spinner">
         <ion-spinner name="dots" color="danger"></ion-spinner>
         <ion-text><h1>Loading data ...</h1></ion-text>
    </div>

    <!-- <ion-spinner name="dots" v-if="spinner"></ion-spinner> -->
   <ion-card v-for="(item,index) in pokemons" :key="index" v-else>
    <ion-card-header>
      <ion-card-subtitle color="danger">{{item.nombre}}</ion-card-subtitle>
      <ion-card-title>
          <img :src="item.imagen" class="image_pokemon"></ion-card-title>
    </ion-card-header>

    <ion-card-content>
        <ion-text color="primary"><h1>Habilidades:</h1></ion-text>
        <ion-text color="warning" v-for="(ability,index) in item.habilidades" :key="index">
            <p>* {{ability.type.name}}</p>
        </ion-text>
         <ion-grid>
            <ion-row>
                <ion-col v-for="(stat,index) in item.stat" :key="index">
                <div>
                  <ion-badge color="primary">{{stat.stat.name}} : {{stat.base_stat}}</ion-badge>
                </div>
                </ion-col>
            </ion-row>
         </ion-grid>
    </ion-card-content>
  
  </ion-card>
   </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            pokemons:[],
            spinner:true
        }
    },
    methods:{
       getLista(){
            for(var i=1;i<10;i++){
                axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(e => {
                    const data = {id:e.data.id,
                        nombre:e.data.name,
                        imagen:e.data.sprites.front_default,
                        habilidades:e.data.types,
                        stat:e.data.stats
                    }
                    this.spinner=false
                    this.pokemons.push(data)
                })
            }
        }
    },
    created(){
        this.getLista()
    }
}
</script>
<style>
.image_pokemon{
    width:100px;
    height:200px;
}
</style>