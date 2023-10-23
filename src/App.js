import { useState, useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import background from "./images/pattern-bg.png"
import arrow from "./images/icon-arrow.svg"
import Markerposition from "./components/Markerposition"

import './App.css'


function App() {
  const [address, setAddress] = useState(null)
  const [ipAddress, setIpAddress] = useState("")
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=8.8.8.8`
        )
        const data = await res.json()
        setAddress(data)
      }

      getInitialData()
    } catch (error) {
      console.trace(error)
    }
  }, [])

  const getEnteredData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
      // https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=8.8.8.8&domain=google.com
    )
    const data = await res.json()
    setAddress(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getEnteredData()
    setIpAddress("")
  }

  return (
    <>
      <section>
        <div>
          <img src={background} alt="" className="backimg" />
        </div>

        <div className="header">
          <h1 className="">
            IP Address Tracker
          </h1>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="inputform"
          >
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP address or domain"
              className=""
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button type="submit" className="submit">
              <img src={arrow} alt="" />
            </button>
          </form>
        </div>

        {address && (
          <>
            <article className="info">
              <div
                className="info-block"
                style={{
                  zIndex: 10000,
                }}
              >
                <article className="info-container">
                  <h2 className="">
                    IP Address
                  </h2>
                  <p className="">
                    {address.ip}
                  </p>
                </article>

                <article className="info-container">
                  <h2 className="">Location</h2>
                  <p className="">
                    {address.location.city}, {address.location.region}
                  </p>
                </article>

                <article className="info-container">
                  <h2 className="">Timezone</h2>
                  <p className="">
                    UTC {address.location.timezone}
                  </p>
                </article>

                <article className="info-container">
                  <h2 className="">ISP</h2>
                  <p className="">
                    {address.isp}
                  </p>
                </article>
              </div>
            </article>

            <MapContainer
              // center={[59,71]}
              center={[address.location.lat, address.location.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "70vh", width: "99vw" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Markerposition address={address} />
            </MapContainer>
          </>
        )}
      </section>
    </>
  )
}

export default App
