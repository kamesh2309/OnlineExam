const Login = () => {


    const onSumbit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataValues = new URLSearchParams();
        for (const [field, value] of formData) {
            formDataValues.append(field, value);
            console.log("key", field, "value", value)
        }
        const userName = formData.get("uname")
        console.log("userName is ___####", userName)
        const data = fetch('https://localhost:8443/exammodule/control/logins', {
            method: 'POST',
            credentials: 'include',
            body: formDataValues,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': "application/json"
            },


        })
            .then(response => {
                console.log("hi iam promise", response);
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                return data;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        console.log(data);
        document.getElementById("sumbit").reset();


    }
    return (
            <div className="row justify-content-center p-4">
                {/* <div className="col-md-4" >  </div> */}
                <div className="col-md-4" >
                    <form id="sumbit" onSubmit={onSumbit} className="textcolor">
                        <div className="mb-3 ">
                            <h2 className="text-center fw-bold  ">LOGIN</h2>
                            <label for="uname" className="form-label ">UserName</label>
                            <input type="text" className="form-control" name="uname" />
                        </div>
                        <div class="mb-3 input_box">
                            <label for="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="upass" />
                        </div >
                        <div>
                            <input type="submit" className="submit_button w-100" value="Login" />
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-4">
                </div> */}
        </div>
    )
}

export default Login
