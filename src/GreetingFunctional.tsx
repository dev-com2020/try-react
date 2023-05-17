import React from 'react';
interface GreetingProps {
    message: string;
}
export default function Greeting(props: GreetingProps) {
    console.log("Greeting.render");
    return (
        <div>
            {props.message}
        </div>
    )
}