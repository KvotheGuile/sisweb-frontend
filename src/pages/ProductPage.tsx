
interface Props{
    message: string;
}

const ProductPage : React.FC<Props> = (props: Props) =>
{
    return (
        <>
            <h1>Product Page</h1>
            <h2>{props.message}</h2>
        </>
    )
}

export default ProductPage;