import { connect } from 'react-redux';
import Navbar from './Navbar';

let a = {
  name: '1212',
  age: "3434",
  students: ['1', '2', '3'],
  classroom: {
    teatcher: {
      name: "1",
      age: '2'
    }
  }
}

let b = {...a};
b.classroom = {...a.classroom};
b.classroom.teatcher = {...a.classroom.teatcher};
b.classroom.teatcher.name = '121211212121212'
b.students = [...a.students]
b.students.push("121212");
console.log(b);


let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;