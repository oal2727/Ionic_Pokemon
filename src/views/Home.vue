<template>
    <ion-card>
     <ion-item>
      <ion-label position="floating">
        Nombre
      </ion-label>
     <ion-input :value="nombre" @input="nombre=$event.target.value"></ion-input>
    <ion-text><p>{{nombre}}</p></ion-text>
  </ion-item>
      <ion-button color="success" expand="full" @click="Save">Guardar</ion-button>
    </ion-card>

</template>
<script>
//doble enlace de datos no funcion con v-model/
//requiere hacerse manualmente trabaja con v-bind  
export default {
  data(){
    return{
      nombre:''
    }
  },
  methods:{
     async Save(){
      const alert = await this.$ionic.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'This is an alert message.',
          buttons: ['OK'],
      })
      alert.present()
    }
  }
}
</script>
<style>
.my-custom-class {
  --background: #e5e5e5;
}
/* DOES NOT WORK - not specific enough */
.alert-wrapper {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
</style>