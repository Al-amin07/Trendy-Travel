import { useEffect, useState } from "react";
import Card from "./Card";


const HomeCards = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-final-hf8sxjm69-alaminns-projects.vercel.app/tourists')
        .then(res => res.json())
        .then(data => {
            setDatas(data)
            console.log(data);
        })
    }, [])

    if(datas.length>6){
        const newData = datas.slice(0,6);
      
        setDatas(newData)
    }

    console.log(datas.length);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                datas.map(data => <Card key={data._id} data={data}></Card>)
            }
        </div>
    );
};

export default HomeCards;