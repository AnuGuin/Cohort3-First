window.signup =  async function() {
        const username  = document.getElementById("signup-name").value;
        const password  = document.getElementById("signup-password").value;
        await axios.post("http://localhost:3000/signup",{
                    username: username,
                    password: password
        })
        alert("Signed up successfully");
    }

window.signin =  async function() {
        const username  = document.getElementById("signin-name").value;
        const password  = document.getElementById("signin-password").value;
        const response = await axios.post("http://localhost:3000/signin",{
            username: username,
            password: password
        })

        localStorage.setItem("token", response.data.token);
        alert("Signed in Successfully")
    }

 window.getUserInformation = async function() {
        const token = localStorage.getItem("token");

        if (token) {
            const response = await axios.get("http://localhost:3000/me", {
                headers: {
                    Authorization: token
                }
            });
            document.getElementById("information").innerHTML = response.data.username;
        }
    }
    getUserInformation();

 window.logout = function() {
    localStorage.removeItem("token");
    alert("You are logged out");
}