/*import styles from '../../styles/style.module.css';
import Cards from "../components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../components/Carousel"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Noticias from "../components/Noticias";
import Messages from "../components/Messages";
import Albums from "../components/Albums";
import React, {useEffect, useState} from "react";

const News = ({  }) => {

  const[news,setNews]=useState([])

  useEffect(()=>{
    const getNews =()=>{
      fetch("https://backend-ifgf.herokuapp.com/api/news")
          .then(res => res.json())
          .then(res =>setNews(res))
    }
    getNews()

  },[])

  const[messages,setMessages]=useState([])

  useEffect(()=>{
    const getMessages =()=>{
      fetch("https://backend-ifgf.herokuapp.com/api/messages")
          .then(res => res.json())
          .then(res =>setMessages(res))
    }
    getMessages()

  },[])

  const[albums,setAlbums]=useState([])

  useEffect(()=>{
    const getAlbums =()=>{
      fetch("https://backend-ifgf.herokuapp.com/api/albums")
          .then(res => res.json())
          .then(res =>setAlbums(res))
    }
    getAlbums()

  },[])

  

  return (
      <body className={styles.body} >
      
      <Header/>
      <Navbar/>

        <Carousel/>

        <div className={styles.events}>

          <h1 className={styles.section}>
            Conoce nuestros eventos
          </h1>
          <div className={styles.linea}></div>

        </div>
        <Cards/>

        <div className={styles.news}>

          <h1 className={styles.section}>
            Entérate de nuestras noticias
          </h1>
          <div className={styles.linea}></div>

        </div>


        <div className="container" >

          <Noticias news={news}/>
        </div>
        <div className="container" >

          <Messages messages={messages}/>
        </div>
        <div className="container" >

        <Albums albums={albums}/>
        </div>

        <div className={styles.donaciones}>
         
              <h1>
                Tu donación nos ayuda a llevar este mensaje al mundo
              </h1>

              <div className={styles.btndonaciones}>
                <button type="button" className="btn btn-primary">Donar aquí</button>
              </div>

              <h1>
                <img className={styles.imagedonaciones} src="https://wwwhatsnew.com/wp-content/uploads/2018/01/PayPal-tarjeta-de-credito.jpg"/>
              </h1>

        </div>

      </body>

  );
};

export default News;

*/


import Layout from "../components/Layout";

import useUser from "../data/useUser";
import Header from "../components/Header";

const IndexPage = () => {
  const { user, loading, loggedIn } = useUser();

  const DisplayInfo = () => {
    if (loading) return <div className="container"> Loading... </div>;
    if (loggedIn && user._id){
      return (
        <div className="container">
          {" "}
          Id: {user._id} <br />
          Email: {user.email} <br />
        </div>
      );
    }

    return <div className="container"> Login to get info </div>;
  };
  return (
    <Layout title="index">
      <Header/>
      <DisplayInfo />
    </Layout>
  );
};

export default IndexPage;

