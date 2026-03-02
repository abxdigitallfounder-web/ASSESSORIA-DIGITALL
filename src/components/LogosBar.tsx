import React from 'react';

export const LogosBar: React.FC = () => {
  return (
    <div className="bg-gray-900 border-t border-b border-gray-700 px-5% py-8">
      <div className="max-w-6xl mx-auto flex items-center gap-4 flex-wrap">
        <span className="text-xs text-white/40 uppercase tracking-widest whitespace-nowrap mr-4">
          Clientes de Confiança
        </span>
        <div className="flex gap-3 flex-wrap">
          {['ATI Physical Therapy', 'Elite DNA', 'Peak Dental', 'Duly Health', 'AEG'].map((client) => (
            <div key={client} className="bg-gray-800 border border-gray-700 text-white/50 px-5 py-2 text-sm font-semibold uppercase tracking-wide">
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
