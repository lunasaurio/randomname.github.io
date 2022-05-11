const app = Vue.createApp({
    data() {
        return {
            title: 'Mr',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@email.com',
            gender: 'male',
            age: '69',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            phone: '(857) 456-789,',
            location: 'Sex City',
            date: '2002-05-21T10:59:49.966Z'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            console.log( results)
            this.title = results[0].name.title;
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
            this.phone = results[0].phone;
            this.location = results[0].location.city;
            this.age = results[0].dob.age;
            this.date = results[0].registered.date
        },  
    }
})

app.mount('#app');
