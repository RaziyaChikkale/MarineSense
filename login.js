function login() { 
 
    const email = 
        document.getElementById("email").value.trim(); 
 
    const password = 
        document.getElementById("password").value.trim(); 
 
    if (email !== "" && password !== "") { 
 
        localStorage.setItem( 
            "marine_login", 
            "true" 
        ); 
 
        localStorage.setItem( 
            "marine_user", 
            email 
        ); 
 
        window.location.href = 
            "index.html"; 
    } 
 
    else { 
 
        document.getElementById("error").innerText = 
            "Please enter a username/email and password"; 
    } 
}
