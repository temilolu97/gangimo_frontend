<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 mx-auto mt-4">
                <div class="card">
                    <div class="card-header text-center py-4">
                        <strong>Login</strong>
                    </div>
                    <div class="card-body">
                        <div v-if="message" class="alert alert-success" role="alert">
                            {{ message }}
                        </div>
                        <div v-if="errors" class="alert alert-danger" role="alert">
                            {{ errors }}
                        </div>
                        <form class="text-center" v-on:submit.prevent="login()">
                            <div class="form-group">
                                <label>Email address</label>
                                <input v-model="email" type="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input v-model="password" type="password" class="form-control">
                            </div>
                            <div class="d-flex justify-content-around">
                                <div>
                                    <!-- Remember me -->
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input">
                                        <label class="form-check-label">Remember me</label>
                                    </div>
                                </div>
                                <div>
                                    <!-- Forgot password -->
                                    <a href="">Forgot password?</a>
                                </div>
                            </div>
                            <!-- Sign in button -->
                            <button class="btn btn-outline-info btn-rounded btn-block mx-auto my-4 waves-effect z-depth-0" type="submit">Sign in</button>

                            <!-- Register -->
                            <p>Not a member?
                                <router-link to="/register">Register</router-link>
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
            email: '',
            password: '',
            message: null,
            errors: null,
        }
    },
    user: {
        authenticated: false
    },
    methods: {
        login() {
            const { email, password } = this;
            axios.post('http://localhost:8000/api/login', { email, password })
                .then((response) => {
                    this.message = response.data.message;
                    this.$router.push('/dashboard');
                })
                .catch((errors) => {
                    this.errors = errors.response.statusText;
                })
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header,
.card-footer {
    background-color: lightgray
}

button {
    background-color: lightgrey;
    width: 50%;
}

.container-fluid {
    background-color: black;
    background-image: url('../assets/gangimo.jpg');
    background-blend-mode: luminosity;
    height: 600px;
}
</style>
