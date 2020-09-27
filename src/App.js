
import React, { Component } from 'react';

import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';

const form=()=>{
    return(<h1>Form</h1>)
}
// Route parametre göndermek için
const news = ({match})=>{
    return(<h1>news page :{match.params.id} </h1>)
}
const Profile=()=>{
    return(<h1>Profil Page:xxx xxx</h1>)
}

const Error = ()=>{
    return(<h1>Sayfa Bulunamadı</h1>)
}
class App extends Component {
    state={
        loggIn:false
    }
    onClickbutton = () => {
       this.setState(prevState=>({
           loggIn:!prevState.loggIn
       }))
    };
  render() {
    return (
     <BrowserRouter>
       <div>
           <Link to="/">Anasayfa</Link>  <br/>
           <Link to="/iletişim">İletişim</Link> <br/>
           <Link to="/form">Form</Link> <br/>
           <Link to="/news/4">News</Link> <br/>
           <Link to="/profile">Profile</Link> <br/>

         <input type="button" onClick={this.onClickbutton} value={this.state.loggIn ? 'Çıkış':'Giriş'}/>

         <Switch>
             <Route path="/"  exact render = {()=>{
                 return(<h1>Anasayfa</h1>)

             }}
             />
             <Route path="/iletişim" exact strict render ={()=>{
                 return(<h1>İletişim</h1>)
             }}
             />
             <Route path="/form" exact strict component={form}
             />
             <Route path="/news/:id" exact strict component={news}
             />
             <Route path="/profile" exact strict render={ () => (
                 this.state.loggIn ? ( <Profile/>) : (<Redirect to="/" />)
             )}
             />
             <Route component={Error} />
         </Switch>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;

