<template>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <form @submit.prevent="handleSubmit">
          <h3>Login</h3>
  
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Enter password">
          </div>
  
          <button class="btn">Sign in</button>
          
          <div v-if="showAlert" class="alert" role="alert">
            Please fill in all fields.
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent',
    data() {
      return {
        name: '',
        password: '',
        showAlert: false 
      };
    },
    methods: {
      handleSubmit() {
        if (this.name === '' || this.password === '') {
          this.showAlert = true; 
        } else {
          const userData = {
            name: this.name,
            password: this.password
          };
          localStorage.setItem('userData', JSON.stringify(userData));
          this.$router.push('/');
        }
      }
    }
  };
  </script>
  

<style>
.auth-wrapper {
    height: 100%;
    width: 100%;
}

.auth-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}

.auth-inner {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    box-sizing: border-box;
    border-radius: 15px;
    transition: all .3s;
}

.auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
}

.auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group{
    display: flex;
    flex-direction: column;
}

.form-group input {
    margin-top: 5px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ced4da;
}

.btn {
    padding: 12px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: white;
}

.btn:hover {
    background-color: #0056b3;
}

.alert{
    width: 100%;
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
}

@media only screen and (max-width: 550px) {
    .auth-inner {
        max-width: 300px;
    }
}

</style>