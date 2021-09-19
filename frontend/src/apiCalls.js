
export async function sendDataToServer(data, sessionTime, videoID, user) {

    data = pruneData(data);

    data = {video_id: videoID, session_time: sessionTime, descriptions: data, user: user}

    return fetch('http://localhost:9000/userData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(data => {})
}

function pruneData(data) {
    let newData = [];
    data.forEach(d => {
        newData.push({level: d.level, text: d.text});
    });

    return newData
}