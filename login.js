import { useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";

function Login(props){
    var [user,setUser] =  useState({username: "", password: ""});
    var [message,setMessage] =  useState("");
    var history = unstable_HistoryRouter;

    var TextChanged = function(args)
    {
        var copyOfUser = {...user};
        copyOfUser[args.target.name] = args.target.value;
        setUser(copyOfUser);
    }
    var ShowMessage = function(msg)
    {
        setMessage(msg);
        setTimeout(() => {
            setMessage("");
        }, 5000);
    }
    var DoLogin = function()
    {
        debugger;
        if(user.username == "mahesh" && user.password == "mahesh@123")
        {
            sessionStorage.setItem("isUserLoggedIn","true");
            sessionStorage.setItem("username",user.username);
            if(props.setUser!=null)
            {
                props.setUser(user.username);
            }
            if(props.path!=null && props.path!="/login")
            {
                // history.
            }
            else
            {
                // history.path("/registration");
            }
        }        
        else
        {
            setUser({username: "", password: ""});
            ShowMessage("Credentials are invalid!");
        }
    }

    debugger;
    return <>
          <center>
            <div className="table-responsive" style={{width: 400}}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>User Name</td>
                                <td>
                                    <input type="text" 
                                        value={user.username}
                                        onChange={TextChanged}
                                        name="username"/>
                                </td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type="password" 
                                        value={user.password}
                                        onChange={TextChanged}
                                        name="password"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="btn btn-Primary" onClick={DoLogin}>Sign In</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="alert alert-info">
                    {message}
                </div>
          </center>
           </>

}
export default Login;