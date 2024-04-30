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
      <div > 
        <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center ">Tourist Spots</h2>
        <p className="w-full md:w-4/6 mx-auto text-center mt-4">Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes.</p>
        </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                datas.map(data => <Card key={data._id} data={data}></Card>)
            }
        </div> */}
        {
            datas.length !== 0 ?    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                datas.map(data => <Card key={data._id} data={data}></Card>)
            }
        </div> : 
         <div className="h-[300px] flex justify-center items-center">
             <span className="loading loading-spinner loading-lg"></span> 
         </div>
        }
      </div>
    );
};

export default HomeCards;