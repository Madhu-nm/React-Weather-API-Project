import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css"



export default function WeatherAPI() {

    const [Search, setSearch] = useState("Chennai");
    const [data, setdata] = useState("");

    useEffect(handleChange, [])

    function handleChange() {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=1491d68dcbc04824ac241650250804&q=${Search}`)
            .then((res) => res.json())
            .then((Data) => setdata(Data))

    }


    return (
        <>
            <div className="whole mx-3 my-3 " >
                <h1 className="title text-center">Weather Conditions</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <div className="input-group">
                            <input type="text" className="form-control" name="Search" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter City Name" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-primary" onClick={handleChange}>Search</button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="main row ">

                    <div className="day-weather col mt-3 ">

                        <div className="sub-dayweather row row-md-cols-2 m-1 p-2">
                            <div className="col p-3">
                                <i className="fa-solid fa-location-dot "></i>
                                <span className="location">{data && data.location.name} - {data && data.location.country} </span>
                                <h2 className="mt-md-3 ms-md-4">{data && data.current.temp_c}&deg;C</h2>
                                <p style={{ color: "grey" }}> Feels like {data && data.current.feelslike_c}&deg;C</p>
                            </div>
                            <div className="col p-0 d-flex align-items-center">
                                {data && <img src={data.current.condition.icon} style={{ height: "18vh" }} />}
                                <p className="location" >{data && data.current.condition.text}</p>

                            </div>

                        </div>

                        <div className="highlight-weather p-2 m-1 mt-4 text-center">
                            <p className="location text-start p-2 m-2 ">Today Highlights</p>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <h2>{data && data.current.cloud}</h2>
                                    <p>Cloud</p>
                                </div>
                                <div className="col-3">
                                    <h2>{data && data.current.uv}</h2>
                                    <p>Uv index</p>
                                </div>
                                <div className="col-3">
                                    <h2>{data && data.current.wind_kph}</h2>
                                    <p>Wind</p>
                                </div>
                                <div className="col-3">
                                    <h2>{data && data.current.humidity}</h2>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-3">
                                    <h3>{data && data.forecast.forecastday[0].astro.sunrise}</h3>
                                    <p>Sunrise</p>
                                </div>
                                <div className="col-3">
                                    <h3>{data && data.forecast.forecastday[0].astro.sunset}</h3>
                                    <p>Sunset</p>
                                </div>
                                <div className="col-3">
                                    <h3>{data && data.forecast.forecastday[0].astro.moonrise}</h3>
                                    <p>Moonrise</p>
                                </div>
                                <div className="col-3">
                                    <h3>{data && data.forecast.forecastday[0].astro.moonset}</h3>
                                    <p>Moonset</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hour-weather col m-3 " >
                        <p className="fs-5 p-3 mt-3">4-Hours Today Weather Forecast  </p>
                        <div className="row  row-cols-3 p-2 m-2 ">
                            <div className="col ">{data && <img src={data.forecast.forecastday[0].hour[0].condition.icon} alt="" />}</div>
                            <div className="col p-3"> <p>12.00am</p></div>
                            <div className="col p-3 "><p className="fw-bold" style={{ color: "grey" }}>{data && data.forecast.forecastday[0].hour[0].condition.text}</p></div>
                            <div className="col ">{data && <img src={data.forecast.forecastday[0].hour[4].condition.icon} alt="" />}</div>
                            <div className="col p-3"> <p>6.00am</p></div>
                            <div className="col p-3"> <p className="fw-bold" style={{ color: "grey" }}>{data && data.forecast.forecastday[0].hour[4].condition.text}</p></div>
                            <div className="col">{data && <img src={data.forecast.forecastday[0].hour[8].condition.icon} alt="" />}</div>
                            <div className="col p-3"> <p>12.00pm</p></div>
                            <div className="col p-3"> <p className="fw-bold" style={{ color: "grey" }}>{data && data.forecast.forecastday[0].hour[8].condition.text}</p></div>
                            <div className="col">{data && <img src={data.forecast.forecastday[0].hour[12].condition.icon} alt="" />}</div>
                            <div className="col p-3"><p>6.00pm</p></div>
                            <div className="col p-3">  <p className="fw-bold" style={{ color: "grey" }}>{data && data.forecast.forecastday[0].hour[12].condition.text}</p></div>
                            <div className="col">{data && <img src={data.forecast.forecastday[0].hour[16].condition.icon} alt="" />}</div>
                            <div className="col p-3"><p>6.00pm</p></div>
                            <div className="col p-3">  <p className="fw-bold" style={{ color: "grey" }}>{data && data.forecast.forecastday[0].hour[16].condition.text}</p></div>
                            <div className="col">{data && <img src={data.forecast.forecastday[0].hour[20].condition.icon} alt="" />}</div>
                            <div className="col p-3"><p>6.00pm</p></div>
                            <div className="col p-3">  <p className="fw-bold" style={{ color: "grey" }}>{data && data.forecast.forecastday[0].hour[20].condition.text}</p></div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}