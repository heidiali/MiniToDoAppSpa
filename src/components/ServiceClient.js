
// TÄMÄ TOIMII JA PALAUTTAA

const apiUrl = "/api/";

//searches all 
export function fetchall() {
    return fetch("/api/user/4").then(function (res) {
        return res.json();
    });
}

export function fetchone(taskid) {
    return fetch("/api/task/" + taskid).then(function (res) {
        return res.json();
    });
}

export function deletequote(id/*, callback*/) {
    return fetch(apiUrl + 'task/' + id, { method: 'DELETE' })
        .then(function (response) {
            //callback();
        })
}

export function createtask(task) {
    fetch(apiUrl + 'task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
        .then((function (response) {
        }));
}


export function updateTask(task, callback) {
    console.log("Update task");
    console.dir(task);
    let taskid = task.taskId;
    fetch(apiUrl + 'task/' + taskid, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task.task)
    })
        .then((function (response) {
            callback();
        }));
}

//EI KAI TOIMI VIELÄ

// export function create(createCallback) {
//     return fetch('/api/task/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(createCallback)
//     })
//         .then(function (response) {
//             /*callback(response);*/
//             return (response);
//         });

// }

//deletes task
//TODO: change /api/ -address
// (callback: id)
export function remove(id) {
    return fetch('/api/user' + id,
        { method: 'DELETE' })
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return (response);
        });
}
