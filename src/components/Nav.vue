<template>
    <nav>
      <div class="container">
        <a href="/" class="navbar-brand">Home</a>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item"><a href="/login" class="nav-link">Login</a></li>
            <li  class="nav-item" @click="logout"><a href="/login" class="nav-link">Log out</a></li>
          </ul>
        </div>
      </div>
    </nav>
</template>


<script>
export default {
  name: 'Nav-component',
  methods: {
    logout() {
      localStorage.removeItem('userData');
      this.$router.push('/login');
    }
  }
}

</script>

<style>
nav {
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  width: 100vw;
}

.container{
  width: 100%;
  padding: 30px 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .container {
    padding: 30px 20px;
  }
}

</style>