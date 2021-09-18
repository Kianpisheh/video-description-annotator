
export async function sendDataToServer(data) {

    data = pruneData(data);

    data = {descriptions: data}

    return fetch('http://localhost:9000/userData', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
}

function pruneData(data) {
    let newData = [];
    data.forEach(d => {
        newData.push({level: d.level, text: d.text});
    });

    return newData
}