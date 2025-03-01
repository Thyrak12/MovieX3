import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <div id="SignInToMovieX3">Sign in to MovieX3</div>
        <input type="text" placeholder="Username" /> <br />
        <input type="password" placeholder="Password" /><br />
        <button id="loginbutton" type="submit">Login</button>
      </form>
      <div className='createAccContainer'>
        <div className='NewtoMovieX3'>New to MovieX3?</div> <br />
        <div className='createAcc'>Create an account</div>
      </div>
      
    </div>
  );
}

export default LoginForm;