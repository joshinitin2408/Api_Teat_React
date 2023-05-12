import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
const fromlocalstorage1 = () => {
    const listt = localStorage.getItem("nm")
    if (listt) {
        return JSON.parse(listt)
    }
    else {
        return []
    }
}
const fromlocalstorage2 = () => {
    const listt = localStorage.getItem("em")
    if (listt) {
        return JSON.parse(listt)
    }
    else {
        return []
    }
}
const fromlocalstorage3 = () => {
    const listt = localStorage.getItem("mb")
    if (listt) {
        return JSON.parse(listt)
    }
    else {
        return []
    }
}
const fromlocalstorage4 = () => {
    const listt = localStorage.getItem("ag")
    if (listt) {
        return JSON.parse(listt)
    }
    else {
        return []
    }
}

const C2 = () => {
    const [username, setUsername] = useState(fromlocalstorage1)
    const [useremail, setUseremail] = useState(fromlocalstorage2)
    const [usermobile, setUsermobile] = useState(fromlocalstorage3)
    const [userage, setUserage] = useState(fromlocalstorage4)
    const location = useLocation()
    const fun3 = () => {

        localStorage.setItem("nm", JSON.stringify(username))


        localStorage.setItem("em", JSON.stringify(useremail))


        localStorage.setItem("mb", JSON.stringify(usermobile))


        localStorage.setItem("ag", JSON.stringify(userage))

    }



    return (
        <><div class="container">
            <form>
                <div class="form-group row">
                    <label for="sn" class="col-sm-2 col-form-label">Show Name</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" name="sn" value={location.state.name} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Your Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="nm" placeholder="Enter Your Name" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Your email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" name="em" placeholder="Enter Your Email" value={useremail} onChange={(e) => { setUseremail(e.target.value) }} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Your mobile</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="mb" placeholder="Enter Your Mobile No." value={usermobile} onChange={(e) => { setUsermobile(e.target.value) }} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Your Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="ag" placeholder="Enter Your Age" value={userage} onChange={(e) => { setUserage(e.target.value) }} />
                    </div>
                </div>

                <p><a class="btn btn-secondary" role="button" onClick={() => { fun3() }}>save detail to local storage</a></p>

            </form>
        </div>
        </>
    )
}

export default C2