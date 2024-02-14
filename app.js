const app = Vue.createApp({
    template:`
    <h2>Başlık: {{baslik}}</h2>
    <h3>İçerik: {{icerik}}</h3>
    <p>Yorum Sayısı: {{yorumsayisi}}</p>
    <button v-on:click="ekle">Ekle</button>
    <p>{{yazi}}</p>
    `,
    data(){
        return{
            baslik:'Vue Dersi',
            icerik:'Vue 3 Konuları',
            yorumsayisi: 0,
            yazi:'Yorum eklemek için tıklayın.'
        }
    },
    methods: {
        ekle(){
            console.log('ekle metodu çalıştı');
            this.yorumsayisi++;
            this.yazi=`${this.yorumsayisi} tane yorum girildi.`
        }
    }
});
app.mount('#app')