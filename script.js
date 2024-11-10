//your JS code here. If required.
const name = document.getElementById("name");
const age = document.getElementById("age");

const data = {
    name: null,
    age: null
}

function validate() {
    if (!name.value || !age.value) {
        alert("Please enter valid details")
        return false;
    }
    return true;
}

function setData() {
    if (validate()) {
        data.name = name.value;
        data.age = age.value;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.age >= 18) {
                    resolve({ status: "success", data: data })
                } else if (data.age < 18) {
                    reject({ satus: "failed", data: data })
                }
            }, 4000);
        })
    }else{
        return new Promise((resolve, reject)=>{
            reject("rejected");
        })
    }

}

window.onload = () => {
    document.getElementById("myForm").onsubmit = (e) => {
        e.preventDefault();  
        const promise = setData();
        promise.then((data) => {
            alert(`Welcome, ${data.data.name}. You can vote.`)
        }).catch((err) => {
            if(err.data)
                alert(`Oh sorry ${err.data.name}. You aren't old enough.`)
        })
    }
}