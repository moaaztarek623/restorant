import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useSpring, animated } from '@react-spring/web'

const Meals = ({items_2}) => {

    const styles = useSpring({
        loop: false,
        from: { opacity: '0' },
        to: { opacity: '1' },
        config: { duration: '400' },
      });

 return (
    <div className="flex flex-col gap-6 w-full items-center my-8">
    <h1>عدد الوجبات هو <span className='font-bold text-orange-900'>{items_2.length}</span></h1>
        {
            items_2.length > 0 ? 
                items_2.map((item) => {
                    return (
                        <Card key={item.id} className="flex-row w-full overflow-hidden max-w-[68rem] rounded-lg box-shadow duration-200 transition-opacity">
                            <animated.div className="flex gap-2 w-full" style={{...styles}}>
                                <CardHeader shadow={false} floated={false} className="shrink-0 m-0">
                                    <img src={item.imgUrl} alt="image" className=" object-cover rounded-none"/>
                                </CardHeader>
                                <CardBody className='w-full'>
                                <div className="flex w-full justify-between">
                                    <Typography variant="h6" color="blue" className="uppercase mb-4 text-gray-800 font-bold">{item.title}</Typography>
                                    <Typography variant="h6" color="blue" className="uppercase mb-4 text-orange-900 font-bold">{item.price}</Typography>
                                </div>
                                    <Typography color="gray" className="font-normal mb-8">
                                        {item.description}
                                    </Typography>
                                </CardBody>
                            </animated.div>
                        </Card>
                    )
                })

            : (<h1>لا يوجد وجبات</h1>)
        }
    </div>
)
}

export default Meals;
