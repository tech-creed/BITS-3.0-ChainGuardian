import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react"

const TransSingleSection = ({ data }) => {
    return (
        <>
            <Card className="mt-6 w-full bg-white rounded-lg p-10">
                <CardBody>
                    <Typography className='grid grid-rows-6 grid-flow-col gap-4'>
                    <div className="font-semibold">Transaction ID</div>
                        <div>{data[0]}</div>
                        <div className="font-semibold">block_id</div>
                        <div>{data[1].block_id}</div>
                        <div className="font-semibold">sender</div>
                        <div>{data[1].sender}</div>
                        <div className="font-semibold">receiver</div>
                        <div>{data[1].receiver}</div>
                        <div className="font-semibold">time</div>
                        <div>{data[1].time}</div>
                        <div className="font-semibold">transferred</div>
                        <div>{data[1].transferred}</div>
                    </Typography>
                </CardBody>
            </Card>
        </>

    );
}

export default TransSingleSection;