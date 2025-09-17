import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if(email == 'test@123' && password == 'test'){
        navigate('/home')

    }
    else{
        alert('wrong email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
      <div className="flex w-full max-w-6xl h-[90vh] min-h-[600px] shadow-2xl rounded-2xl overflow-hidden bg-white">
        {/* Left Side: Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-white to-teal-50 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-8 sm:-top-12 lg:-top-16 -left-8 sm:-left-12 lg:-left-16 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-amber-100 rounded-full opacity-30"></div>
          </div>
          
          <div className="relative w-full max-w-sm px-6 sm:px-8 lg:px-6">
            {/* Logo/Brand area */}
            <div className="text-center mb-6 sm:mb-8">
            
              <h1 className="text-2xl sm:text-3xl lg:text-xl font-bold text-slate-800 mb-1 sm:mb-2">Welcome Back</h1>
              <p className="text-slate-600 text-sm sm:text-base lg:text-sm">Sign in to your account to continue</p>
            </div>

            <form onSubmit={(e)=>{handleSubmit(e)}} className="space-y-4 sm:space-y-6 lg:space-y-4">
              {/* Email Input */}
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-sm sm:text-base lg:text-xs font-medium text-slate-700" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 lg:pl-2 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 text-md border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm "
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1 sm:space-y-2">
                <label className="block text-sm sm:text-base lg:text-xs font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 lg:pl-2 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     className="w-full p-4 text-md border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm "
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 sm:pr-4 lg:pr-2 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between text-xs sm:text-sm lg:text-xs">
                <label className="flex items-center space-x-1 sm:space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4"
                  />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <a href="#" className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 lg:py-2 px-4 sm:px-6 lg:px-3 rounded-lg sm:rounded-xl lg:rounded-lg hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base lg:text-sm"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3 lg:h-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 sm:my-8 lg:my-5 flex items-center">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="px-3 sm:px-4 lg:px-2 text-xs sm:text-sm lg:text-xs text-slate-500 bg-white">or</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Social Login */}
            <div className="mb-6 sm:mb-8 lg:mb-0">
              <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-2 py-3 sm:py-4 lg:py-2 px-4 sm:px-6 lg:px-3 border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg hover:bg-slate-50 transition-colors text-sm sm:text-base lg:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-slate-700 font-medium">Continue with Google</span>
              </button>
            </div>

            {/* Sign up link */}
            <div className="text-center">
              <p className="text-slate-600 text-xs sm:text-sm lg:text-xs">
                Don't have an account?{' '}
                <Link to={'/register'} className="text-teal-600 text-xl hover:text-teal-700 font-semibold transition-colors">
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Video Section - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-amber-600/20 z-10"></div>
          
          {/* Placeholder for video/image */}
          <div className="w-full h-full bg-gradient-to-br from-teal-200 via-emerald-200 to-amber-200 flex items-center justify-center">
           <img className='w-full h-full object-cover' src="https://i.pinimg.com/1200x/04/c1/30/04c13012dbee00a22920e76112ceb910.jpg" alt="" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
          
    
    </div>
      </div>
    </div>
  )
}

export default Login