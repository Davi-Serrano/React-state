import react from "react"

const item = ({id, full_name}) => (

    <li key={id}>{full_name}</li>
)

export default item