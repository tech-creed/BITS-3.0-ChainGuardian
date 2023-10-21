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
            <Card className="mt-6 text-black w-full bg-white rounded-lg p-10">
                <CardBody>
                    <Typography className='grid grid-rows-6 grid-flow-col gap-4'>
                    <div className="font-semibold" style={{ marginRight: '1rem' }}>Transaction ID</div>
                        <div style={{ marginRight: '1rem' }}>{data[0]}</div>
                        <div className="font-semibold" style={{ marginRight: '1rem' }}>block_id</div>
                        <div style={{ marginRight: '1rem' }}>{data[1].block_id}</div>
                        <div style={{ marginRight: '1rem' }} className="font-semibold">sender</div>
                        <div style={{ marginRight: '1rem' }}>{data[1].sender}</div>
                        <div style={{ marginLeft: '13rem' }} className="font-semibold">receiver</div>
                        <div style={{ marginLeft: '13rem' }}>{data[1].receiver}</div>
                        <div style={{ marginLeft: '13rem' }} className="font-semibold">time</div>
                        <div style={{ marginLeft: '13rem' }}>{data[1].time}</div>
                        <div style={{ marginLeft: '13rem' }} className="font-semibold">transferred</div>
                        <div style={{ marginLeft: '13rem' }} >{data[1].transferred}</div>
                    </Typography> 
                </CardBody>
            </Card>
        </>

    );
}

export default TransSingleSection;