
import  {Form } from 'react-bootstrap';
import './App.css';
import Profile from './profile/Profile';
import m1 from './profile/m1.jpg'
import navbar from './profile/navbar';

function App() {
  const bio="Mahdi aissa is a dynamic and driven commerce professional with a passion for innovation and customer satisfaction. With a Bachelor's degree in Business Administration and several years of experience in the field, Mahdi has established himself as a respected and knowledgeable leader in the industry.After completing his degree, Mahdi started his career as a sales representative at a leading retail company, where he quickly rose through the ranks thanks to his exceptional performance and results-driven mindset. He was promoted to team leader within two years and was responsible for training and developing new sales representatives.In his current role as a commerce analyst at a top e-commerce company, Mahdi is responsible for analyzing consumer behavior and market trends, developing pricing strategies, and optimizing sales channels to maximize revenue. He is known for his ability to think outside the box and come up with innovative solutions that drive growth and improve customer satisfaction In his free time, Mahdi enjoys playing basketball and volunteering at a local nonprofit organization that helps underprivileged youth. He is also a dedicated family man, and enjoys spending time with his wife and young daughter."
  const handleName =name =>alert(name);
  return (
    <div className="App">
      <navbar/>;
    <Profile fullName="MEHDI AISSA" bio= {bio} profession="commerciale" handleName={handleName}>

       <img src={m1} alt="pic1"/>
       </Profile> 
     
    </div>
    
  );
  

}

export default App;
