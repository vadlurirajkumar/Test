import Button from 'componentsbyrk/types/Button'

const page = () => {
    return (
        <div>
            <Button label="Click Me" variant="success" onClick={() => alert('Clicked!')} />
        </div>
    )
}

export default page