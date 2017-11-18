import React from 'react';
import {Card, CardFooter, CardHeader, CardBody} from 'reactstrap';

const CardBox = ({icon, title, children, footer}) => {
    return (
        <Card className="mb-5">
            <CardHeader>
                <i className={icon}/>
                 {" " + title}
            </CardHeader>
            <CardBody>{children}</CardBody>
            <CardFooter>{footer}</CardFooter>
        </Card>
    )
};

export default CardBox;