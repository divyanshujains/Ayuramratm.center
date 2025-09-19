import React, { useState , useEffect} from 'react'
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // ✅ Function to generate a random 5-digit number
  const generateDiceCode = () => {
    const code = Math.floor(10000 + Math.random() * 90000).toString()
    setFormData(prev => ({ ...prev, diceCode: code }))
  }

  // ✅ generate once on component mount
  useEffect(() => {
    generateDiceCode()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
      <div className="flex w-full max-w-6xl h-[98vh] min-h-[700px] shadow-2xl rounded-2xl overflow-hidden bg-white">
        {/* Left Side: Register Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-white to-teal-50 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-8 sm:-top-12 lg:-top-16 -left-8 sm:-left-12 lg:-left-16 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-amber-100 rounded-full opacity-30"></div>
          </div>
          
          <div className="relative w-full max-w-sm px-6 sm:px-8 lg:px-6 py-4">
            {/* Logo/Brand area */}
            <div className="text-center mb-4 sm:mb-6">
           
              <h1 className="text-2xl sm:text-3xl lg:text-xl font-bold text-slate-800 mb-1 sm:mb-2">Create Account</h1>
              <p className="text-slate-600 text-sm sm:text-base lg:text-sm">Join us and start your wellness journey</p>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-3">
              {/* Name Fields */}
              <div className="space-y-1">
                <label className="block text-sm sm:text-base lg:text-xs font-medium text-slate-700" htmlFor="confirmPassword">
                 Name of center
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 lg:pl-2 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 text-slate-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleInputChange}
                    className="w-full pl-8 sm:pl-10 lg:pl-8 pr-8 sm:pr-10 lg:pr-8 py-3 sm:py-4 lg:py-2.5 border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-base lg:text-sm"
                    placeholder="Name of center"
                    required
                  />
                
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="block text-sm sm:text-base lg:text-xs font-medium text-slate-700" htmlFor="email">
                  Email 
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 lg:pl-2 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-8 sm:pl-10 lg:pl-8 pr-3 py-3 sm:py-4 lg:py-2.5 border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-base lg:text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
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
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-8 sm:pl-10 lg:pl-8 pr-8 sm:pr-10 lg:pr-8 py-3 sm:py-4 lg:py-2.5 border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-base lg:text-sm"
                    placeholder="Create password"
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

              <div className="space-y-1">
                <label className="block text-sm sm:text-base lg:text-xs font-medium text-slate-700" htmlFor="confirmPassword">
                  Addess
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 lg:pl-2 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 text-slate-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="Address"
                    name="Adress"
                    className="w-full pl-8 sm:pl-10 lg:pl-8 pr-8 sm:pr-10 lg:pr-8 py-3 sm:py-4 lg:py-2.5 border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-sm sm:text-base lg:text-sm"
                    placeholder="Address"
                    required
                  />
                </div>
              </div>
              {/* ✅ Dice Code Section (Smaller) */}
<div className="space-y-1">
  <label
    className="block text-xs font-medium text-slate-700"
    htmlFor="diceCode"
  >
    Dice Code (Unique ID)
  </label>
  <div className="flex items-center gap-2">
    <input
      id="diceCode"
      name="diceCode"
      value={formData.diceCode}
      readOnly
      className="flex-1 px-2 py-1 border border-slate-300 rounded-md 
                 focus:outline-none bg-gray-100 text-center 
                 font-semibold text-slate-700 tracking-widest text-sm"
    />
    <button
      type="button"
      onClick={generateDiceCode}
      className="flex items-center justify-center px-2 py-1 
                 bg-teal-500 text-white rounded-md 
                 hover:bg-teal-600 transition text-sm"
    >
      <RefreshCw size={14} />
    </button>
  </div>
  <p className="text-[10px] text-slate-500 mt-1">
    This unique code will be used as your center ID.
  </p>
</div>


              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 rounded border-slate-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4"
                  required
                />
                <label htmlFor="terms" className="text-xs sm:text-sm lg:text-xs text-slate-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit}
                className="group w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 lg:py-2.5 px-4 sm:px-6 lg:px-3 rounded-lg sm:rounded-xl lg:rounded-lg hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base lg:text-sm mt-4"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3 lg:h-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="my-4 sm:my-6 lg:my-4 flex items-center">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="px-3 sm:px-4 lg:px-2 text-xs sm:text-sm lg:text-xs text-slate-500 bg-white">or</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Social Login */}
            <div className="mb-4 sm:mb-6 lg:mb-4">
              <button className="w-full flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-2 py-3 sm:py-4 lg:py-2.5 px-4 sm:px-6 lg:px-3 border border-slate-200 rounded-lg sm:rounded-xl lg:rounded-lg hover:bg-slate-50 transition-colors text-sm sm:text-base lg:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-slate-700 font-medium">Continue with Google</span>
              </button>
            </div>

            {/* Login link */}
            <div className="text-center">
              <p className="text-slate-600 text-xs sm:text-sm lg:text-xs">
                Already have an account?{' '}
                <Link to={'/'}   className="text-teal-600 text-xl hover:text-teal-700 font-semibold transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Section - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-amber-600/20 z-10"></div>
          
          {/* Image */}
          <div className="w-full h-full">
            <img 
              className='w-full h-full object-cover' 
              src="https://i.pinimg.com/736x/8e/24/0e/8e240ef72a249f7d969ed16611dfbf26.jpg" 
              alt="Wellness journey" 
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
          
          {/* Overlay Content */}
          <div className="absolute bottom-8 left-8 right-8 text-white z-30">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Start Your Journey
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Join thousands who have transformed their lives through our holistic wellness platform.
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-16 right-16 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-bounce z-20"></div>
          <div className="absolute top-32 left-16 w-8 h-8 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 z-20"></div>
        </div>
      </div>
    </div>
  )
}

export default Register