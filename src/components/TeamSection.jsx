import React from 'react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  // Placeholder team members - you'll update these with actual photos and info later
  const teamMembers = [
    {
      id: 1,
      name: 'Team Member 1',
      designation: 'Organizer',
      image: '/team/member1.jpg'
    },
    {
      id: 2,
      name: 'Team Member 2',
      designation: 'Co-Organizer',
      image: '/team/member2.jpg'
    },
    {
      id: 3,
      name: 'Team Member 3',
      designation: 'Curator',
      image: '/team/member3.jpg'
    },
    {
      id: 4,
      name: 'Team Member 4',
      designation: 'Marketing Lead',
      image: '/team/member4.jpg'
    },
    {
      id: 5,
      name: 'Team Member 5',
      designation: 'Design Lead',
      image: '/team/member5.jpg'
    },
    {
      id: 6,
      name: 'Team Member 6',
      designation: 'Technical Lead',
      image: '/team/member6.jpg'
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Meet the team</h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-full group-hover:from-red-600/40 transition-all duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-red-600/50 transition-all duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23333"/%3E%3Ctext x="50" y="50" font-size="40" text-anchor="middle" dy=".3em" fill="%23fff"%3E%3F%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
              
              {/* Designation */}
              <p className="text-sm sm:text-base text-gray-400">{member.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

