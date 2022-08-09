import { useParams } from "react-router-dom";

const Test = () => {
    const { key } = useParams();

    return <div>{key}</div>;
};

export default Test;
