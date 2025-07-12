import React from 'react';
import { assets } from '../assets/assets';
import { Leaf, Repeat, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 px-6 sm:px-10 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          About <span className="bg-gradient-to-r from-primary to-green-500 text-white px-3 py-1 rounded">ReWear</span>
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="md:w-1/2 text-gray-700 space-y-5 text-[15px]">
          <p>
            <span className="font-semibold text-gray-900">ReWear</span> is a sustainability-focused platform where users can
            exchange unused clothes either directly or through a point-based system.
          </p>
          <p>
            By promoting mindful fashion habits, we aim to reduce textile waste and encourage people to reuse wearable garments
            instead of discarding them.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
            <p>
              We envision a future where eco-conscious choices become the norm. ReWear empowers people to give clothes a second
              life and connect with others who care about sustainability.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={assets.About} alt="About ReWear" className="rounded-xl shadow-lg w-full max-w-md mx-auto" />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300 shadow-md flex flex-col items-center text-center gap-4">
            <Leaf className="w-8 h-8 text-green-500" />
            <h4 className="font-semibold text-lg">Sustainability</h4>
            <p className="text-sm">Reduce fashion waste by participating in conscious clothing reuse.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300 shadow-md flex flex-col items-center text-center gap-4">
            <Repeat className="w-8 h-8 text-blue-500" />
            <h4 className="font-semibold text-lg">Flexible Swaps</h4>
            <p className="text-sm">Exchange items via direct swap or redeem points — your choice.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300 shadow-md flex flex-col items-center text-center gap-4">
            <Users className="w-8 h-8 text-purple-500" />
            <h4 className="font-semibold text-lg">Community Driven</h4>
            <p className="text-sm">Join a like-minded community that values eco-friendly living.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
