import axios from "axios"

export const listRepositorires = () =>
    axios
        .get("https://api.github.com/repositories")
            .then(({ data }) => data )
