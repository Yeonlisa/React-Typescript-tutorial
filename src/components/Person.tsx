type PersonProps = {
    name: {
        first: String
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}