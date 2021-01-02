import './Bootstrap.css';
import data from "./data";
import {useEffect, useState} from "react";
function App() {

    let categories = data.map( (d) => d.category)
    categories = [...new Set(categories)];

    const [currentCat,setCurrentCat] = useState('all')
    const [currentData, setCurrentData] = useState([]);

    useEffect( () => {
        console.log("?")
        if(currentCat === 'all'){
            setCurrentData(data)
        }else{
            let newData = data.filter( (d)=> d.category === currentCat)
            setCurrentData(newData)
        }
    },[currentCat])

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12 text-center">
                    <button className="btn btn-outline-primary mx-2" onClick={ () => setCurrentCat('all')}>All</button>
                    {
                        categories.map( (cat,index) => {
                            return <button key={cat+index} className="btn btn-outline-primary mx-2" onClick={ () => setCurrentCat(cat)}>{cat}</button>
                        })
                    }
                </div>
            </div>
            <div className="row">
                {
                    currentData.map( (info) => {
                        return (
                            <div key={info.id} className="col-12 col-xl-6 my-2">
                                <div className="row">
                                    <div className="col-3 col-lg-2 col-xl-3">
                                        <img className="img-thumbnail"
                                             src={info.img} alt={info.title}/>
                                    </div>
                                    <div className="col-9 col-lg-10 col-xl-9">
                                        <div className="border-bottom border-primary">
                                            <h3>{info.title} <span className="badge badge-primary float-right">${info.price}</span></h3>
                                        </div>
                                        <p>
                                            {info.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default App;
