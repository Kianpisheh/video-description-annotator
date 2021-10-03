
export async function sendDataToServer2(data, sessionTime, videoID, user) {

    data = pruneData(data);

    data = {video_id: videoID, session_time: sessionTime, descriptions: data, user: user}

    return fetch('https://secret-gorge-06842.herokuapp.com/userData', {
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


export async function sendDataToServer()