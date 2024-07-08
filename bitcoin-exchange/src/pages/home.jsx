import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/footer';
import BTC from '../assets/bitcoin.png';
import ETH from '../assets/ethereum.png';
import BNB from '../assets/bnb.png';
import USDT from '../assets/usdt.png';
import CRYPTOEXCHANGE from '../assets/app.png'; // Crypto exchange logo
import MONEYEXCHANGE from '../assets/money-exchange.png'; // Money exchange logo

// toast.configure();

export default function HomePage() {
  const navigate = useNavigate();

  const handleBuyCrypto = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/buy');
    } else {
      toast.error('You cannot buy before signing up. Please complete the signup process.', 
      );
    }
  };

  const handleLoginSignup = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <img
                  src={MONEYEXCHANGE}
                  alt="Money Exchange"
                  className="mx-auto h-32 md:h-40 lg:h-48 xl:h-56" 
                />
                <div className="space-y-2">
                  {/* Heading with gradient text */}
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white animate__animated animate__fadeIn animate__bounce">
                    Buy <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Crypto</span> with Ease
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Trade Bitcoin, Ethereum, BNB, and Tether with our secure and user-friendly platform. Get started today!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <button
                    onClick={handleBuyCrypto}
                    className="relative inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 hover:shadow-neon hover:animate-neon-glow"
                  >
                    Buy Crypto
                  </button>
                  <button
                    onClick={handleLoginSignup}
                    className="relative inline-flex h-10 items-center justify-center rounded-md border border-blue-600 bg-white px-8 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 hover:shadow-neon hover:animate-neon-glow"
                  >
                    Login / Signup
                  </button>
                </div>
              </div>
              <img
                src={CRYPTOEXCHANGE}
                width="300"
                height="300"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
                  Supported Cryptocurrencies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trade the Top Cryptocurrencies</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                  Buy and sell Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), and Tether (USDT) on our secure and user-friendly platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <img src={BTC} alt="Bitcoin" className="h-12 w-12" />
                <div className="space-y-1 text-center">
                  <h4 className="text-xl font-bold">Bitcoin (BTC)</h4>
                  <p className="text-gray-500 dark:text-gray-400">Buy and Sell</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img src={ETH} alt="Ethereum" className="h-12 w-12" />
                <div className="space-y-1 text-center">
                  <h4 className="text-xl font-bold">Ethereum (ETH)</h4>
                  <p className="text-gray-500 dark:text-gray-400">Buy and Sell</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img src={BNB} alt="Binance Coin" className="h-12 w-12" />
                <div className="space-y-1 text-center">
                  <h4 className="text-xl font-bold">Binance Coin (BNB)</h4>
                  <p className="text-gray-500 dark:text-gray-400">Buy and Sell</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img src={USDT} alt="Tether" className="h-12 w-12" />
                <div className="space-y-1 text-center">
                  <h4 className="text-xl font-bold">Tether (USDT)</h4>
                  <p className="text-gray-500 dark:text-gray-400">Buy and Sell</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
