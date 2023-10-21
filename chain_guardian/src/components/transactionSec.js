import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Example({data}) {
    return (
        <>
            <Card className="mt-6 w-full bg-white rounded-lg p-10">
                <CardBody>
                    <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
                    <Typography className='grid grid-rows-6 grid-flow-col gap-4'>
                        <div className="font-semibold">Transaction ID</div>
                        <div>{data['transaction'].id}</div>
                     <div className="font-semibold">Block ID</div>
                     <div>{data['transaction'].time}</div>
                     <div className="font-semibold">Time</div>
                     <div>{data['transaction'].block_id}</div>
                     <div className="font-semibold">Size</div>
                      <div>{data['transaction'].size}</div>
                     <div className="font-semibold">Weight</div>
                     <div>{data['transaction'].weight}</div>
                     <div className="font-semibold">Fees USD</div>
                     <div>{data['transaction'].fee_usd}</div>
                     <div className="font-semibold">Total USD</div>
                      <div>{data['transaction'].input_total_usd}</div>
                    </Typography>
                </CardBody>
                
                <CardFooter className="ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 pt-0 mt-5 bg-indigo-600 rounded-md w-48">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center text-white gap-2">
                        data
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </>

    );
}