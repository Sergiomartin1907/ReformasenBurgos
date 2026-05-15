import React, { useState, useEffect } from 'react';
import { CreditCard, ArrowDownToLine, ArrowUpFromLine, AlertCircle, CheckCircle2, History, IndianRupee, Euro, DollarSign } from 'lucide-react';

const AtmSimulator = () => {
  const [balance, setBalance] = useState(1000.00);
  const [creditMode, setCreditMode] = useState(false);
  const [amountInput, setAmountInput] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [alert, setAlert] = useState(null);

  const CREDIT_LIMIT = -500.00;

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleTransaction = (type) => {
    const amount = parseFloat(amountInput);

    if (isNaN(amount) || amount <= 0) {
      setAlert({ type: 'error', message: 'El monto ingresado debe ser mayor a cero.' });
      return;
    }

    if (type === 'withdraw') {
      const newBalance = balance - amount;
      if (!creditMode && newBalance < 0) {
        setAlert({ type: 'error', message: 'Saldo insuficiente. Activa el Modo Crédito para sobregiros.' });
        return;
      }
      if (creditMode && newBalance < CREDIT_LIMIT) {
        setAlert({ type: 'error', message: `Límite de crédito excedido. Máximo sobregiro permitido: $${Math.abs(CREDIT_LIMIT).toFixed(2)}` });
        return;
      }

      setBalance(newBalance);
      addTransaction('Retiro', amount, 'negative');
      setAlert({ type: 'success', message: `Retiro exitoso de $${amount.toFixed(2)}` });
      setAmountInput('');
    } else if (type === 'deposit') {
      setBalance(balance + amount);
      addTransaction('Ingreso', amount, 'positive');
      setAlert({ type: 'success', message: `Ingreso exitoso de $${amount.toFixed(2)}` });
      setAmountInput('');
    }
  };

  const addTransaction = (type, amount, balanceEffect) => {
    const newTx = {
      id: Date.now(),
      type,
      amount,
      effect: balanceEffect,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
    setTransactions(prev => [newTx, ...prev].slice(0, 6)); // Keep last 6 transactions
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 relative">
        
        {/* Header & Balance */}
        <div className="p-8 pb-6 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <CreditCard size={16} className="text-white" />
              </div>
              <span className="font-semibold text-slate-300 tracking-wide uppercase text-xs">Global Bank</span>
            </div>
            
            <button 
              onClick={() => setCreditMode(!creditMode)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 border ${
                creditMode 
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
              }`}
            >
              Modo Crédito {creditMode ? 'Activo' : 'Inactivo'}
            </button>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-400">Saldo Disponible</p>
            <h1 className="text-5xl font-light tracking-tight flex items-center gap-1 transition-all duration-500">
              <span className={balance < 0 ? 'text-amber-400' : 'text-white'}>
                {formatCurrency(balance)}
              </span>
            </h1>
            {balance < 0 && (
              <p className="text-amber-500/80 text-xs font-medium uppercase tracking-wider mt-2 flex items-center gap-1">
                <AlertCircle size={12} /> Cuenta en sobregiro
              </p>
            )}
          </div>
        </div>

        {/* Global Alert Notification */}
        {alert && (
          <div className="absolute top-0 left-0 right-0 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
            <div className={`p-4 mx-4 mt-4 rounded-xl flex items-start gap-3 shadow-lg border backdrop-blur-md ${
              alert.type === 'error' 
                ? 'bg-rose-500/15 border-rose-500/30 text-rose-200' 
                : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200'
            }`}>
              {alert.type === 'error' ? <AlertCircle size={20} className="text-rose-400 shrink-0" /> : <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />}
              <p className="text-sm font-medium leading-tight pt-0.5">{alert.message}</p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="px-8 pb-8">
          <div className="bg-slate-950/50 rounded-2xl p-4 border border-slate-800 mb-6">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Monto a operar</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-lg">$</span>
              <input 
                type="number"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                placeholder="0.00"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-8 pr-4 text-xl font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => handleTransaction('deposit')}
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-[0.98] border border-slate-700"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ArrowDownToLine size={20} />
              </div>
              <span className="font-medium text-sm text-slate-300">Ingresar</span>
            </button>
            <button 
              onClick={() => handleTransaction('withdraw')}
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpFromLine size={20} />
              </div>
              <span className="font-medium text-sm">Retirar</span>
            </button>
          </div>

          {/* History */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <History size={16} className="text-slate-500" />
              <h3 className="text-sm font-medium text-slate-400">Últimos Movimientos</h3>
            </div>
            
            <div className="space-y-3">
              {transactions.length === 0 ? (
                <p className="text-slate-600 text-sm text-center py-4 italic">No hay transacciones recientes.</p>
              ) : (
                transactions.map((tx) => (
                  <div key={tx.id} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        tx.effect === 'positive' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {tx.effect === 'positive' ? <ArrowDownToLine size={14} /> : <ArrowUpFromLine size={14} />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{tx.type}</p>
                        <p className="text-xs text-slate-500">{tx.timestamp}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${
                      tx.effect === 'positive' ? 'text-emerald-400' : 'text-white'
                    }`}>
                      {tx.effect === 'positive' ? '+' : '-'}{formatCurrency(tx.amount)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmSimulator;
