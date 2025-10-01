// Given country and cities name .Display cities based on country selected .

import {useState} from "react";
export default function App() {
    const [selected, setselected] = useState("");
    const [cities, setcities] = useState("");
    const arr = [
        {name:"India", value:"DL", cities:["delhi", "mumbai"]},
        {name:"Nepal", value:"NP", cities:["katmandu", "sitara"]}
    ];
 
    return (
        <div>
            <select value={selected} onChange={(e) => {setselected(e.target.value)}}>
                <option value="">Select a country</option>
                {arr.map((it, index) => (      
                    <option key={index} value={it.name}>{it.name}</option>
                ))}
            </select>
            
            <select value={cities} onChange={(e) => setcities(e.target.value)}>
                <option value="">Select city</option>
                {arr.map((it, index) => (
                    (it.name === selected) && 
                        it.cities.map((city, idx) => 
                            <option key={idx} value={city}>{city}</option>
                        )
                ))}
            </select>
            
            <p>Selected Country: {selected}</p>
             <p>Selected city: {cities}</p>
        </div>
    );
}