import React from 'react'

export default function Footer() {
  const date = new Date()
  return (
    <div className=' bg-slate-500'>
      <p className="text-center text-[20px] font-sans py-2"><span className="text-purple-400">Promised</span><span className="text-blue-500">Bags</span>. All rights Reserved. &copy; {date.getFullYear()}</p>
    </div>
  )
}
