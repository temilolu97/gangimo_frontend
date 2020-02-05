<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 mx-auto mt-4">
                <div class="card">
                    <div class="card-header text-center py-4">
                        <strong>Register</strong>
                    </div>
                    <div class="card-body">
                        <div v-if="message" class="alert alert-success" role="alert">
                            {{ message }}
                        </div>
                        <div v-if="errors" class="alert alert-danger" role="alert">
                            {{ errors }}
                        </div>
                        <form class="text-center" v-on:submit.prevent="register()">
                            <div class="form-group">
                                <label>Name</label>
                                <input v-model="name" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input v-model="email" type="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input v-model="password" type="password" class="form-control">
                            </div>
                            <!-- Sign in button -->
                            <button class="btn btn-outline-info btn-rounded btn-block mx-auto my-4 waves-effect z-depth-0" type="submit">Sign in</button>

                            <!-- Register -->
                            <p>Already have an account?
                                <router-link to="/login">Login</router-link>
                            </p>
                        </form>
                    </div>
                    <div class="card-footer">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data() {
        return {
            name:'',
            email: '',
            password: '',
            message:null,
            errors: null,
        }
    },
    methods: {
        register() {
            const { name, email, password } = this;
            axios.post('http://localhost:8000/api/register', { name, email, password })
                .then((response) => {
                    this.message =response.data.message
                })
                .catch((errors) => {
                    this.errors = errors.response.statusText
                })
        }
    }

}
</script>

<style scoped>
.card-header,.card-footer {
    background-color: lightgrey;
}

button {
    background-color: lightgrey;
    width: 50%;
}

.container-fluid {
    background-color: lightgrey;
    background-image: url('../assets/gangimo.jpg');
    background-blend-mode: luminosity;
    height: 600px;
}
</style>
