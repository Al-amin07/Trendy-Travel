import { useEffect, useState } from "react";
import Card from "./Card";


const HomeCards = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tourists')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])

    if(datas.length>6){
        const newData = datas.slice(0,6);
      
        setDatas(newData)
    }
    
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                datas.map(data => <Card key={data._id} data={data}></Card>)
            }
        </div>
    );
};

export default HomeCards;