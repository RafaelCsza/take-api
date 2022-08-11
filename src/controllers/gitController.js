const axios = require('axios');

exports.getRepositories = (req, res) => {
    let filtered_repositories = [];

    for(let i = 1; i < 3; i++) {
        axios.get(`https://api.github.com/users/takenet/repos?sort=created&direction=asc&per_page=100&page=${i}`)
        .then(response => {
            filtered_repositories.push(...response.data.filter((repository) => {
                if(repository.language == "C#") return repository;
            }));

            if(i == 1) res.status(200).send(filtered_repositories.slice(0, 5));
        })
        .catch(error => {
            res.status(500).send(error);
        });
    }
};