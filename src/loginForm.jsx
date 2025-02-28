import './login.css'
function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <div id="SignInToMovieX3">Sign in to MovieX3</div>
        <input type="text" placeholder="Username" /> <br />
        <input type="password" placeholder="Password" /><br />
        <button id="loginbutton" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;