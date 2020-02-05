<template>
    <div>
        <nav class="site-header sticky-top py-1">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                </a>
                <a class="py-2 d-none d-md-inline-block" href="#">Home</a>
                <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
                <a class="py-2 d-none d-md-inline-block" href="#">Contact Us</a>
                <router-link class="py-2 d-none d-md-inline-block" to="/login">Login</router-link>
                <router-link class="py-2 d-none d-md-inline-block" to="/register">Sign Up</router-link>
            </div>
        </nav>
        <div class="main position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Gangimo</h1>
                <p class="btn btn-outline-secondary" href="#">Coming soon</p>
            </div>
            <div class="product-device box-shadow d-none d-md-block"></div>
            <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
        

        <footer class="container py-5">
            <div class="row">
                <div class="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                    <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Features</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-muted" href="#">Cool stuff</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Random feature</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Team feature</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Stuff for developers</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Another one</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Last time</a>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-md">
                    <h5>Company</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-muted" href="#">About</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Team</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>About</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-muted" href="#">Team</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Locations</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Privacy</a>
                        </li>
                        <li>
                            <a class="text-muted" href="#">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    font-family: cursive;
    color: black;
}
a{
    color: gray;
}
.main{
    background-image: url('../assets/gangimo.jpg');
    background-color:darkseagreen;
    background-blend-mode:luminosity
}
</style>
