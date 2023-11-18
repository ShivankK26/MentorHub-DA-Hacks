import '../index.css';
import React, { useEffect } from 'react';

export default function Mentor() {
    const [data, setData] = React.useState([]);
    const getData = async () => {
        const response = await fetch('https://sheet.best/api/sheets/f4faf31e-7cf9-49e6-8a99-2a68d5c8210f');
        const data = await response.json();
        setData(data);
    }
    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    return (
        <div className='items'>
            {data.map((item) => (
                <div className='item'>
                    <img className='each-row-item card-image' src={item.Image} alt={item.Image} />
                    <div className='each-row-item'><h2 className='mentor-name'>{item['Mentor Name']}</h2></div>
                    <p className='tech-stack'>{item['Main TechStack']}</p>
                    <img className='linkedin-logo' src="./linkedin-logo.png" alt="" />
                </div>
            ))}
        </div>
    );
}