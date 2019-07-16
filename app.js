// Komponen "Home" akan menampilkan halaman depan aplikasi
const Home = Vue.extend({
    template: '#serial',
    data: function () {
        return {
            satu : 'satuu'
        }
    }
});

const Timbangan = Vue.extend({
    template: '#display-timbangan',
    data: function () {
        return {
            satu : '3000',
            status:1
        }
    },
    method:{
        ubah_status:function(par){
            this.status=par
        }
    }
});


// 2. Definisikan routing menuju komponen
const routes = [
    {
        path: '/',
        component: Home
                },
    {
        path: '/timbangan',
        component: Timbangan
                }
]

// 3. Buat instance Router Vue
const router = new VueRouter({
    routes
})

// 4. Tempelkan instance "router" ke App Vue
const spa = new Vue({
    router
}).$mount('#spa');
