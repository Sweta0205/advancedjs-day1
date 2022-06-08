const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': 'fda1b99104msh4d7d14dcfdcef00p178727jsnb49e53870cb6'
    }
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
    .then(response => response.json())
    .then(response => console.log(response)


    )

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd', options)
    .then(response => response.json())
    .then(songList => {
        console.log(songList)

        const grid = document.querySelector(".container > .row")

        for (let i = 0; i < songList.data.length; i++) {
            const song = songList.data[i]

            const col = document.createElement("div")
            col.className = "col-sm-6 col-md-4 col-lg-3"

            col.innerHTML = `
                <div class="card">
                    <img src=${song.album.cover} class="card-img-top" alt=${song.album.title}>
                    <div class="card-body">
                        <h5 class="card-title">${song.album.title}</h5>
                    </div>
                </div>
`

            grid.appendChild(col)
        }
    }
    )

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=daft punk', options)
    .then(response => response.json())
    .then(songList => {
        console.log(songList)

        const grid = document.querySelector(".container > .row")

        for (let i = 0; i < songList.data.length; i++) {
            const song = songList.data[i]

            const col = document.createElement("div")
            col.className = "col-sm-6 col-md-4 col-lg-3"

            col.innerHTML = `
                <div class="card">
                    <img src=${song.album.cover} class="card-img-top" alt=${song.album.title}>
                    <div class="card-body">
                        <h5 class="card-title">${song.album.title}</h5>
                    </div>
                </div>
`

            grid.appendChild(col)
        }
    }
    )

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', options)
    .then(response => response.json())
    .then(songList => {
        console.log(songList)

        const grid = document.querySelector(".container > .row")

        for (let i = 0; i < songList.data.length; i++) {
            const song = songList.data[i]

            const col = document.createElement("div")
            col.className = "col-sm-6 col-md-4 col-lg-3"

            col.innerHTML = `
                <div class="card">
                    <img src=${song.album.cover} class="card-img-top" alt=${song.album.title}>
                    <div class="card-body">
                        <h5 class="card-title">${song.album.title}</h5>
                    </div>
                </div>
`

            grid.appendChild(col)
        }
    }
    )
    .catch(err => console.error(err));
















