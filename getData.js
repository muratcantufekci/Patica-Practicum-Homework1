import axios from 'axios'

//id parametresi ile istekte bulunarak dönen datayı birleştirip return eder
const getData = async (id) => {
    try {
        const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        return {...users, posts}
    } catch (error) {
        console.log('Something went wrong!',error);
    }
    
}

export default getData;