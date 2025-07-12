
const Contact = () => {
  return (
    <div className='px-4 md:px-20 py-12 bg-gray-50 text-gray-800'>
      <h2 className='text-center text-3xl font-bold text-primary mb-2'>Get in Touch</h2>
      <p className='text-center text-gray-500 mb-10'>We’d love to hear from you! Reach out with any questions or suggestions.</p>

      <div className='flex flex-col md:flex-row gap-12'>
        {/* Left: Contact Info */}
        <div className='w-full md:w-1/2 flex flex-col gap-6'>
          
          <div className='mt-6'>
            <h3 className='text-lg font-semibold text-gray-700 mb-2'>ReWear Office</h3>
            <p className='text-gray-600'>
              5th Floor, Innov8 Tower, Sector 63,<br />
              Noida, Uttar Pradesh, India - 201301
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-700 mb-2'>Contact Details</h3>
            <p className='text-gray-600'>Phone: +91 98765 43210</p>
            <p className='text-gray-600'>Email: support@rewear.in</p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-700 mb-2'>Careers</h3>
            <p className='text-gray-600 mb-3'>Passionate about sustainability? Join our team!</p>
            <button className='bg-primary text-white px-6 py-2 rounded-full hover:bg-black transition-all duration-300'>
              View Open Roles
            </button>
          </div>
        </div>

        {/* Right: Simple Contact Form */}
        <div className='w-full md:w-1/2 bg-white shadow-md rounded-xl p-8'>
          <h3 className='text-xl font-semibold mb-4'>Send us a message</h3>
          <form className='flex flex-col gap-4'>
            <input type="text" placeholder='Your Name' className='border p-3 rounded-lg' />
            <input type="email" placeholder='Your Email' className='border p-3 rounded-lg' />
            <textarea rows="5" placeholder='Your Message' className='border p-3 rounded-lg'></textarea>
            <button type='submit' className='bg-primary text-white py-3 rounded-lg hover:bg-black transition-all duration-300'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
