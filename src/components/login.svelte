<script>
  import { auth, provider } from "../firebase/firebaseAuth";
  import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";

  let email = "";
  let authToken = "";

  async function handleGoogleLogin() {
    try {
      await auth.signInWithRedirect(provider);
    } catch (error) {
      console.error("Google login error:", error);
    }
  }

  async function handleGitHubLogin() {
    // Implement GitHub login logic using Firebase authentication
    // Retrieve the user's email and authentication token
  }

  // Handle the redirect result when the page loads
  onMount(async () => {
    try {
      const result = await getRedirectResult(auth);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      email = user.email;
      authToken = await user.getIdToken();
    } catch (error) {
      console.error("Redirect result error:", error);
    }
  });

  console.log("email:", email);
  console.log("authToken:", authToken);

</script>

<main>
  <h1>Login</h1>

  <button on:click={handleGoogleLogin}> Login with Google </button>

  <button on:click={handleGitHubLogin}> Login with GitHub </button>

  <p>Email: {email}</p>
  <p>Auth Token: {authToken}</p>
</main>
