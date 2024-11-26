import {Form,Input,Button} from 'antd'
import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../context/AuthContext'



export default function Login(){
    const {setUser} = useContext(AuthContext)
    const [users,setUsers] = useState()
    const navigate = useNavigate()
   async function handleSubmit(values){
   try{
    const {email,password} = values
    const response = await axios.post('http://loaclhost:3500/users',{email,Password})
    console.log(response.data)
    setUser({email,password})
navigate('/home')
   }
   catch (err){
    console.log(err)
   }

    
    }
    return(
        <div className="login-container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Login</h2>
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Invalid email format' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"  style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
        
      </Form>
    </div>
    )
}
