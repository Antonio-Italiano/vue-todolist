console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            tasks: [{text: 'fare la spesa', done: true},
                    {text: 'mangiare', done: false},
                    {text: 'dormire', done: false} ],
                }
    },
    computed: {       
    },
    methods: {
        deletTask(i) {
            this.tasks.splice( i, 1 )
        },
    
    }

})

app.mount('#root');

