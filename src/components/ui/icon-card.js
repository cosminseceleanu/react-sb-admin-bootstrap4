import React from 'react';
import {Card, CardBody, CardFooter} from 'reactstrap'

const IconCard = ({bgColorClass, icon, text, buttonText}) => {
    return (
        <Card className={`text-white ${bgColorClass} o-hidden h-100`}>
            <CardBody>
                <div className="card-body-icon">
                    <i className={icon}/>
                </div>
                <div className="mr-5">
                    {text}
                </div>
            </CardBody>
            <CardFooter className="text-white clearfix small z-1">
                <span className="float-left">{buttonText}</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"/>
                </span>
            </CardFooter>
        </Card>
    )
};

export default IconCard;
