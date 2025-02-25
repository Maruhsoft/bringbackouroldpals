import React, { useEffect, useState } from 'react';
import { School, Heart, Users, Camera, Clock, MessageCircle, QrCode, Send, Sparkles } from 'lucide-react';

// Floating name component with animation
const FloatingName = ({ name, emoji, delay }: { name: string; emoji: string; delay: number }) => (
  <div 
    className="animate-float opacity-0"
    style={{
      animation: `float 3s ease-in-out infinite ${delay}s, fadeIn 1s ease-in-out ${delay}s forwards`
    }}
  >
    <span className="text-2xl font-semibold text-teal-400">{name}</span>
    <span className="ml-2">{emoji}</span>
  </div>
);

// Memory card component
const MemoryCard = ({ title, description, imageUrl }: { 
  title: string; 
  description: string; 
  imageUrl: string;
}) => (
  <div className="bg-navy-800 rounded-lg overflow-hidden transform transition-all hover:scale-105 border border-teal-900 hover:border-teal-400 group">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-60"></div>
    </div>
    <div className="p-6 bg-gradient-to-b from-navy-800 to-navy-900 transform transition-all duration-300 group-hover:translate-y-[-4px]">
      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{title}</h3>
      <p className="text-teal-300 mt-2 opacity-80 group-hover:opacity-100">{description}</p>
    </div>
  </div>
);

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const memories = [
    {
      title: 'First Day Jitters',
      description: 'Remember those nervous first steps through the gates? The way Mrs. Johnson welcomed us with her warm smile...',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800'
    },
    {
      title: 'Sports Day Glory',
      description: 'Our class dominated every event! Still can hear the cheers echoing across the field.',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800'
    },
    {
      title: 'Science Fair Brilliance',
      description: 'Breaking records with our innovative projects. Remember that volcano that actually worked?',
      imageUrl: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800'
    },
    {
      title: 'Drama Club Performance',
      description: 'Our unforgettable rendition of "Romeo and Juliet" - complete with that infamous falling curtain!',
      imageUrl: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800'
    },
    {
      title: 'Library Adventures',
      description: 'Those lunch breaks spent discovering new worlds between pages, hiding from the prefects.',
      imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800'
    },
    {
      title: 'Graduation Day',
      description: 'Tears, laughter, and promises to stay in touch forever. Time to reconnect and fulfill those promises.',
      imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className={`relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <School className="w-20 h-20 text-teal-400 mx-auto mb-8 animate-pulse" />
            <div className="absolute -inset-4 bg-teal-500/20 blur-xl rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-gold-400 mb-4 animate-gradient">
            Come Back Home
          </h1>
          <p className="text-xl md:text-2xl text-teal-300 mb-12">
            Reconnecting Our PPS Family 🏫
          </p>
          
          {/* Floating Names */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[
              { name: 'Brenda', emoji: '💫', delay: 0 },
              { name: 'Halima', emoji: '🌟', delay: 0.2 },
              { name: 'Ruth', emoji: '✨', delay: 0.4 },
              { name: 'Charles', emoji: '🌠', delay: 0.6 },
              { name: 'Promise', emoji: '💫', delay: 0.8 }
            ].map((item, index) => (
              <FloatingName key={index} {...item} />
            ))}
          </div>

          <p className="text-lg text-purple-300 mb-8">Missing You in Our WhatsApp Family</p>
          
          <a 
            href="https://chat.whatsapp.com/LJ2Kh83qQknK0gv0QIM5zQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-teal-500 transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-navy-900"
          >
            <span className="relative z-10">Rejoin Our Circle</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-teal-600/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </header>

      {/* Memory Lane Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <Camera className="w-16 h-16 text-gold-400 mx-auto mb-6 animate-pulse" />
              <div className="absolute -inset-4 bg-gold-500/20 blur-xl rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-purple-400 mb-4 animate-gradient">Memory Lane</h2>
            <p className="text-teal-300">Relive our cherished moments together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <MemoryCard key={index} {...memory} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy-900 to-navy-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
        <div className="max-w-xl mx-auto text-center relative">
          <div className="relative inline-block">
            <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
            <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-8 animate-gradient">Update Your Details</h2>
          
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-lg bg-navy-800 border border-teal-900 focus:border-teal-400 text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-lg bg-navy-800 border border-teal-900 focus:border-teal-400 text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
            />
            <textarea
              placeholder="Share a memory..."
              className="w-full px-6 py-4 rounded-lg bg-navy-800 border border-teal-900 focus:border-teal-400 text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-gold-600 to-purple-600 rounded-lg font-semibold hover:from-gold-500 hover:to-purple-500 transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-900"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600/50 to-purple-600/50 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-6 text-teal-300">Patricia Private School - Class of 2011</p>
          <div className="flex justify-center space-x-8">
            <Heart className="w-6 h-6 text-red-400 hover:text-red-300 transition-colors cursor-pointer animate-pulse" />
            <Users className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer" />
            <Clock className="w-6 h-6 text-teal-400 hover:text-teal-300 transition-colors cursor-pointer" />
            <QrCode className="w-6 h-6 text-gold-400 hover:text-gold-300 transition-colors cursor-pointer" />
            <Send className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;