import axios from "axios"
import { useEffect , useState} from "react";
import Weather from "./Weather"
import styles from "./styles/App.module.css"

function App() {
  const [dataReady,setDataReady] = useState(false)
  const [data,setData]=useState({})
  const [location,setLocation]=useState({
    lon:35.32,
    lat:36.98
  })

  useEffect(()=>{
    
    const getData= async ()=>{
      setDataReady(false)
      const response =await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      setData(response.data)
      setDataReady(true)
    }
    getData()
   
  },[location])
  const handleChange=async ()=>{
    const response =await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${document.getElementById("city").value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
    setLocation({
      lat:response.data[0].lat,
      lon:response.data[0].lon
    })
  }
  return (
    <div className={styles.body}>
      <video autoPlay loop muted className={styles.video}>
        <source src={require("./img/videobackground.mp4")} type="video/mp4"/>
      </video>
      <select className={styles.select} name="city" id="city" onChange={handleChange}>
        <option value="Adana">Adana</option>
        <option value="Adıyaman">Adıyaman</option>
        <option value="Afyonkarahisar">Afyonkarahisar</option>
        <option value="Ağrı">Ağrı</option>
        <option value="Aksaray">Aksaray</option>
        <option value="Amasya">Amasya</option>
        <option value="Ankara">Ankara</option>
        <option value="Antalya">Antalya</option>
        <option value="Ardahan">Ardahan</option>
        <option value="Artvin">Artvin</option>
        <option value="Aydın">Aydın</option>
        <option value="Balıkesir">Balıkesir</option>
        <option value="Bartın">Bartın</option>
        <option value="Batman">Batman</option>
        <option value="Bayburt">Bayburt</option>
        <option value="Bilecik">Bilecik</option>
        <option value="Bingöl">Bingöl</option>
        <option value="Bitlis">Bitlis</option>
        <option value="Bolu">Bolu</option>
        <option value="Burdur">Burdur</option>
        <option value="Bursa">Bursa</option>
        <option value="Çanakkale">Çanakkale</option>
        <option value="Çankırı">Çankırı</option>
        <option value="Çorum">Çorum</option>
        <option value="Denizli">Denizli</option>
        <option value="Diyarbakır">Diyarbakır</option>
        <option value="Düzce">Düzce</option>
        <option value="Edirne">Edirne</option>
        <option value="Elazığ">Elazığ</option>
        <option value="Erzincan">Erzincan</option>
        <option value="Erzurum">Erzurum</option>
        <option value="Eskişehir">Eskişehir</option>
        <option value="Gaziantep">Gaziantep</option>
        <option value="Giresun">Giresun</option>
        <option value="Gümüşhane">Gümüşhane</option>
        <option value="Hakkari">Hakkâri</option>
        <option value="Hatay">Hatay</option>
        <option value="Iğdır">Iğdır</option>
        <option value="Isparta">Isparta</option>
        <option value="İstanbul">İstanbul</option>
        <option value="İzmir">İzmir</option>
        <option value="Kahramanmaraş">Kahramanmaraş</option>
        <option value="Karabük">Karabük</option>
        <option value="Karaman">Karaman</option>
        <option value="Kars">Kars</option>
        <option value="Kastamonu">Kastamonu</option>
        <option value="Kayseri">Kayseri</option>
        <option value="Kırıkkale">Kırıkkale</option>
        <option value="Kırklareli">Kırklareli</option>
        <option value="Kırşehir">Kırşehir</option>
        <option value="Kilis">Kilis</option>
        <option value="Kocaeli">Kocaeli</option>
        <option value="Konya">Konya</option>
        <option value="Kütahya">Kütahya</option>
        <option value="Malatya">Malatya</option>
        <option value="Manisa">Manisa</option>
        <option value="Mardin">Mardin</option>
        <option value="Mersin">Mersin</option>
        <option value="Muğla">Muğla</option>
        <option value="Muş">Muş</option>
        <option value="Nevşehir">Nevşehir</option>
        <option value="Niğde">Niğde</option>
        <option value="Ordu">Ordu</option>
        <option value="Osmaniye">Osmaniye</option>
        <option value="Rize">Rize</option>
        <option value="Sakarya">Sakarya</option>
        <option value="Samsun">Samsun</option>
        <option value="Siirt">Siirt</option>
        <option value="Sinop">Sinop</option>
        <option value="Sivas">Sivas</option>
        <option value="Şanlıurfa">Şanlıurfa</option>
        <option value="Şırnak">Şırnak</option>
        <option value="Tokat">Tokat</option>
        <option value="Trabzon">Trabzon</option>
        <option value="Tunceli">Tunceli</option>
        <option value="Uşak">Uşak</option>
        <option value="Van">Van</option>
        <option value="Yalova">Yalova</option>
        <option value="Yozgat">Yozgat</option>
        <option value="Zonguldak">Zonguldak</option>
      </select>
      {dataReady ? <Weather weather={data}/>: <div className={styles.loading}></div>}

    </div>
  );
}

export default App;
