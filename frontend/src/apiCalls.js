
export async function sendDataToServer(data, sessionTime, videoID) {

    data = pruneData(data);

    data = {video_id: videoID, session_time: sessionTime, descriptions: data}

    return fetch('http://localhost:9000/userData', {
        method: 'POST',
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