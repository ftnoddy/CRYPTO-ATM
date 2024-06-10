import mongoose from 'mongoose';

const buyBitcoinSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
  },
  cryptoType: {
    type: String,
    required: true,
    enum: ['BTC', 'ETH', 'USDT', 'BNB'], // Allowed values for cryptoType
  },
  amount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const BuyBitcoin = mongoose.model('BuyBitcoin', buyBitcoinSchema);

export default BuyBitcoin;
