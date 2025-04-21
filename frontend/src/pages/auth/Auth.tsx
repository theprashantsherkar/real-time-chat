import React, { ChangeEvent, ReactElement, ReactEventHandler } from 'react'
import TextField from '@mui/material/TextField';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async(e:React.FormEvent) =>{

    }

  return (
    <div className='flex items-center justify-center w-full h-screen '>
                <div className='flex flex-col items-center justify-center w-1/3 h-1/2 bg-white shadow-lg rounded-lg p-5 gap-5'>
                    <h1 className='text-3xl font-bold mb-4 flex items-center justify-center gap-3 text-black'><ArrowBackIcon className='hover:cursor-pointer text-black rounded-full border border-black scale-150' onClick={() => navigate(-1)} />Login</h1>
                    <FormControl className='flex flex-col gap-5 '>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />

                        <FormControl variant='outlined'  >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={(e:React.MouseEvent) => e.preventDefault()}
                                            onMouseUp={(e:React.MouseEvent) => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </FormControl>
                    <Button variant='contained' onClick={(e:React.FormEvent)=>handleSubmit(e)}>Login</Button>
                    <div className='flex items-center justify-center gap-3  w-full text-black'>
                        Don't have an account? <Link to={'/register'} className='text-blue-500'>Register here</Link>
                    </div>
                </div>

            </div>
  )
}

export function Register(){
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
    }

    return (
        <>
            <div className='flex items-center justify-center w-full h-screen '>
                <div className='flex flex-col items-center justify-center w-1/3 min-h-max bg-white shadow-lg rounded-lg p-5 gap-5'>
                    <h1 className='text-3xl font-bold mb-4 flex items-center justify-center gap-3 text-black'><ArrowBackIcon className='hover:cursor-pointer rounded-full border border-black scale-150 text-black' onClick={() => navigate(-1)} />Register Here</h1>
                    <FormControl className='flex flex-col gap-5 '>

                        <TextField
                            id="outlined-basic"
                            label="User name"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <FormControl variant='outlined'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={(e) => e.preventDefault()}
                                            onMouseUp={(e) => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button variant="contained" onClick={(e)=>handleSubmit(e)}>Register</Button>
                    </FormControl>
                    <div className='flex items-center justify-center gap-3  w-full text-black'>
                Already have an account? <Link to={'/'} className='text-blue-500'>Login here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
