import React, { Component } from 'react'
import Typical from 'react-typical'

export default function Lib() {
    return (
        <div>
            <Typical
                steps={['Hello', 1000, 'Hello world!', 500, 'I am here', 500]}
                loop={Infinity}
                wrapper="h1"
            />
        </div>
    );
}