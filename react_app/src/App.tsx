import './App.scss';
import ClassesPage from './pages/Classes/classes';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import CreateClassPage from './pages/CreateClass/CreateClass';
import ClassPage from './pages/Class/Class';
import CreateStudentPage from './pages/CreateStudent/CreateStudent';
import StudentPage from './pages/Student/Student';
import UpdateStudentPage from './pages/UpdateStudent/UpdateStudent';
import UpdateClassPage from './pages/UpdateClass/UpdateClass';

function App() {
  const {id} = useParams();

  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
          <Routes>
            <Route path="/" element={<Navigate to="/classes" replace/>}/>
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/classes/create-class" element={<CreateClassPage />} />
            <Route path="/classes/:id" element={<ClassPage />} />
            <Route path={`/classes/:id/add-student`} element={<CreateStudentPage />} />
            <Route path={`/classes/student/:id`} element={<StudentPage />} />
            <Route path={`/classes/student/:id/update`} element={<UpdateStudentPage />} />
            <Route path={`/classes/:id/update`} element={<UpdateClassPage />} />
          </Routes>
    </div>
  );
}

export default App;
