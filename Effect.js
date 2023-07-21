import {useState,useeffect} from "reacr";
import { useEffect } from "react";
import MyButton from "../myapp/src/Effect";

function myButton() {
    const [c,setC] = useState(0);
    useEffect(() => {
        setTimeout((c) => {
            setC((c) => c + 1);
        },1000);
    });
    return (<p>Running {c} time</p>);

};
export default myButton;
