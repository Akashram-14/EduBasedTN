import logo from './Tamil_Nadu_Emblem.png';
import './App.css';

import Home from './home';
import PreHome from './prehome';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './register';
import PreLogin from './prelogin';
import StudentLogin from './studentlogin';
import StaffLogin from './stafflogin';
import AdminLogin from './adminlogin';
import AboutUs from './aboutus';
import Directories from './directorates';
import StudentPage from './studentpage';
import ResultPage from './resultpage';
import TasksAndEventsPage from './tasksandEventsPage';
import AdminPage from './adminpage';
import StudentPortfolio from './studentportfolio';
import StaffPortfolio from './staffportfolio';
import UpdateEvents from './updateevent';
import PaymentPage from './paymentpage';
import StaffPage from './staffpage';
import AttendancePage from './attendance';
import IndividualAttend from './individualattend';
import UpdateTasks from './updatetask';
import RTIRequest from './righttoinfo';
import StandardsPage from './StandardsPage';
import QuestionsPage from './QuestionPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<RegistrationPage/>}/>
      <Route path='/login' element={<PreLogin/>}/>
      <Route path='/studentlogin' element={<StudentLogin/>}/>
      <Route path='/stafflogin' element={<StaffLogin/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/home' element={<PreHome/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/directorates' element={<Directories/>}/>
      <Route path='/studentpage' element={<StudentPage/>}/>
      <Route path='/result' element={<ResultPage/>}/>
      <Route path='/task' element={<TasksAndEventsPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/studentport' element={<StudentPortfolio/>}/>
      <Route path='/staffport' element={<StaffPortfolio/>}/>
      <Route path='/updateevent' element={<UpdateEvents/>}/>
      <Route path='/donate' element={<PaymentPage/>}/>
      <Route path='/staffpage' element={<StaffPage/>}/>
      <Route path='/attendance' element={<AttendancePage/>}/>
      <Route path='/individualattend' element={<IndividualAttend/>}/>
      <Route path='/update' element={<UpdateTasks/>}/> 
      <Route path='/homepage' element={<Home/>}/>
      <Route path='/righttoinfo' element={<RTIRequest/>}/>
      <Route path='/standards' element={<StandardsPage/>}/>
      <Route path='/10th' element={<QuestionsPage/>}/>
      <Route path='/9th' element={<QuestionsPage/>}/>
      <Route path='/8th' element={<QuestionsPage/>}/>
    </Routes>
  );
}

export default App;
