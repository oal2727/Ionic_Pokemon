<template>
        <ion-toolbar color="dark">
           <ion-title>Pokemons</ion-title>
              <ion-buttons slot="secondary">
                  <ion-button color="primary"><router-link class="item" to="/">Dashboard</router-link></ion-button>
                  <ion-button color="primary"><router-link class="item" to="/Pokemons">Pokemons</router-link></ion-button>
              </ion-buttons>
        </ion-toolbar>
</template>
<style>
.item{
    text-decoration: none;
    color:white;
}
</style>